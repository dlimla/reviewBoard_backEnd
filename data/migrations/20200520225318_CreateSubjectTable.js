
exports.up = function(knex, Promise) {
  return knex.schema.createTable('category', tbl => {
    tbl.increments();
    tbl.string('category_name')
    tbl.integer('object_id')
        .unique()
        .unsigned()
        .references('id')
        .inTable('object')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('category')
};
