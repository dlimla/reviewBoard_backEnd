const knex = require('knex')

const dbConfig = require('../knexfile.js');

const db = knex(dbConfig.development);


module.exports = {
    getAllReviews,
    getOneObject,
    getOneSubject,
    addReview,
    editReview,
    getAllOneSubject
}

function getAllReviews() {
    return db('object')
        .innerJoin('review', 'object_review', 'object.id')
        .select(
            'object_name',
            'object_manufac',
            'object_price',
            'object_country_origin',
            'review.review as object review',
            'review_created_data as created on'
        )
}

function getOneObject(id) {
    return db('object')
        .innerJoin('review', 'object_review', 'object.id')
        .select(
            'object_name',
            'object_manufac',
            'object_price',
            'object_country_origin',
            'review.review as object review',
            'review_created_data as created on'
        )
        .where({ id })
}

function getOneSubject(id) {
    return db('category')
        .where({ id })
}

async function addReview(id, review) {
    // const object = getOneObject(id)
    const [id] = await db('review').insert(review)
    return getOneObject(id)
}

function editReview(id, changes) {
    return db('review').where({id}).update( changes, '*')
}

function getAllOneSubject(id) {
    return db('category')
        .innerJoin('object', 'category_type', 'category_id')
        .select(
            'object_name',
            'object_manufac',
            'object_price',
            'object_country_origin',
            'category_type'
        )
        .where({ id })
}