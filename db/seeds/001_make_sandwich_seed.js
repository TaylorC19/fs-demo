/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('sandwich').del()
  await knex('sandwich').insert([
    {
      img_url: 'BlissfulBagelSandwich.jpeg', 
      name: 'Blissful Bagel Sandwich', 
      desc: 'A holy sandwich',
      calories: 800,
      likes: 64,
      prep_time: 20,
      default_serving: 2,
    },
    {
      img_url: 'BetterBurgerSandwich.jpeg', 
      name: 'Better Burger Sandwich', 
      desc: `It's not the best, but it's better`,
      calories: 1400,
      likes: 10,
      prep_time: 10,
      default_serving: 1,
    },
    {
      img_url: 'OutspokenOpenSandwich.jpeg', 
      name: 'Outspoken Open Sandwich', 
      desc: 'This sandwich is very honest. Do not try to eat it upside down.',
      calories: 160,
      likes: 27,
      prep_time: 5,
      default_serving: 0.5,
    }
  ]);
};
