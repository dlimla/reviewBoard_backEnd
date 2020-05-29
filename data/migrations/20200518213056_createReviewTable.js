
exports.up = function(knex, Promise) {
  return knex.schema.createTable('review', tbl => {
      tbl.increments();
      tbl.string('review');
      tbl.timestamp('review_created_date').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('review');
};
