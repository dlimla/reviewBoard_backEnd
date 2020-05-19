
exports.up = function(knex, Promise) {
  return knex.schema.createTable('review', tbl => {
      tbl.increments();
      tbl.string('review');
      tbl.integer('object_id')
        .unique()
        .unsigned()
        .references('id')
        .inTable('object')
        .onDelete('CASCADE');

      tbl.timestamp('review_created_date').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableifExists('review');
};
