
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('review').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('review').insert([
        {
          review: "This chisel is very nice to handle and cuts really well.  It also sharpens pretty easily and it's maintains its edge even over long periods of cutting."
        },
        {
          review: 'This chisel maintians its first cut but after awhile it hard to keep its edge and you have to sharpen it for awhile.'
        }
      ]);
    });
};
