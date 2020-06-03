
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('object').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('object').insert([
        {
          object_name: "Two Cherries 3/4in chisel",
          object_manufac: 'Two Cherries',
          object_price: "$33.39",
          object_country_origin: "Germany",
          category_type: 1,
          object_review: 1
        },
        {
          object_name: "Stanley 3/4in Chisel",
          object_manufac: 'Two Cherries',
          object_price: "$33.39",
          object_country_origin: "Germany",
          category_type: 1,
          object_review: 2
        },
        {
          object_name: "Triumph and Torment",
          object_manufac: "Marvel",
          object_price: "$9.99",
          object_country_origin: "USA",
          category_type: 3,
          object_review: 3

        }
      ]);
    });
};
