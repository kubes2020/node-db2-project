
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: '123', car_make: 'ford', model: 'f150', mileage: '1233'},
        {VIN: '1234', car_make: 'chevy', model: 'f150', mileage: '1233'},
        {VIN: '12345', car_make: 'honda', model: 'f150', mileage: '1233', automatic_transmission: true}
      ]);
    });
};
