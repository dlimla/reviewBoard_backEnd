
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
        },
        {
          review: "This Dr Strange and Doom story is quite an adventure.  It has great chemistry between the two doctors that still is present in the modern comics of today.  If you want to see and early comic on the iteractions between them and while having differnt mindsets but still working together to achieve a common goal was a great read.  Highely recommended.  "
        }
      ]);
    });
};
