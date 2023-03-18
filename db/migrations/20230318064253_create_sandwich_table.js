/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  return await knex.schema.createTable('sandwich', (table) => {
    table.increments('id')
      .primary();
    table.string('img_url', 255);
    table.string('name', 255);
    table.text('desc', 'mediumtext');
    table.integer('calories');
    table.integer('likes');
    table.integer('prep_time');
    table.float('default_serving');

  })
  
};
/*
{
  id: PRIMARY KEY UNIQUE INTEGER,
  image: STRING,
  name: STRING,
  likes: INTEGER,
  desc: TEXT,
  prep_time: INTEGER,
  default_serving: FLOAT,
  calories: INTEGER,
}
*/
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('sandwich')
};
