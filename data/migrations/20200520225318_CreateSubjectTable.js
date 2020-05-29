
exports.up = function(knex, Promise) {
  return knex.schema.createTable('category', tbl => {
    tbl.increments();
    tbl.string('category_name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('category')
};
