
exports.up = function(knex) {
  return knex.schema.table('cars', tbl => {
      tbl.renameColumn('make', 'car_make')
  })
};

exports.down = function(knex) {
    return knex.schema.table('cars', tbl => {
        tbl.renameColumn('car_make', 'make' )
    })
};
