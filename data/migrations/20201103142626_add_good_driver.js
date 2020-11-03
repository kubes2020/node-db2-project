
exports.up = function(knex) {
  return knex.schema.table('cars', tbl => {
      tbl.boolean('Good Driver')
  })
};

exports.down = function(knex) {
  return knex.shema.table('cars', tbl => {
      tbl.dropColumn('Good Driver')
  })
};
