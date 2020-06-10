const knex = require('knex')

const dbConfig = require('../knexfile.js');

const db = knex(dbConfig.development);


module.exports = {
    getAllReviews,
    getOneObject
}

async function getAllReviews() {
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

async function getOneObject(id) {
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