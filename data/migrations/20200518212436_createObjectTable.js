
exports.up = function(knex, Promise) {
  return knex.schema.createTable('object', tbl => {
    tbl.increments();
    tbl.string('object_name').notNullable();
    tbl.string('object_manufac').notNullable();
    tbl.integer('object_price')
    tbl.string('object_country_origin').notNullable()
    tbl
      .string('category_type')
      .unsigned()
      .references('id')
      .inTable('category')
      .onUpdate('CASCADE')
    tbl
      .string('object_review')
      .unsigned()
      .references('id')
      .inTable('review')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('object');
};
