
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('players').del()
    .then(function () {
      // Inserts seed entries
      return knex('players').insert([
        {name: 'Clayton Kershaw', jersey_number: 22, position: 'P'},
        {name: 'Cody Bellinger', jersey_number: 35, position: 'OF'},
        {name: 'Justin Turner', jersey_number: 10, position: '3B'}
      ]);
    });
};
