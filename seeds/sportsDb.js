exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sports').del()
  .then(function () {
    // Inserts seed entries
    return knex('sports').insert([
      {id: 1, name: 'surfing', category: 'water'},
      {id: 2, name: 'skiing', category: 'mountain'},
      {id: 3, name: 'mountain biking', category: 'mountain'},
      {id: 4, name: 'snorkeling', category: 'water'},
      {id: 5, name: 'running', category: 'outside'},
      {id: 6, name: 'rock climbing', category: 'mountain'},
      {id: 7, name: 'kitesurfing', category: 'water'},
      {id: 8, name: 'parasailing', category: 'water'},
      {id: 9, name: 'hiking', category: 'mountain'},
      {id: 10, name: 'diving', category: 'water'},
      {id: 11, name: 'kayaking', category: 'water'},
      {id: 12, name: 'paragliding', category: 'air'},
      {id: 13, name: 'sky diving', category: 'air'},
      {id: 14, name: 'golf', category: 'outside'},
      {id: 15, name: 'windsurfing', category: 'water'},
      {id: 16, name: 'snowboarding', category: 'mountain'},
      {id: 17, name: 'treeking', category: 'mountain'},
      {id: 18, name: 'ice climbing', category: 'mountain'},
      {id: 19, name: 'parachuting', category: 'air'},
      {id: 20, name: 'caving', category: 'mountain'},
      {id: 21, name: 'cave diving', category: 'water'},
      {id: 22, name: 'canyoning', category: 'water'},
      {id: 23, name: 'cycling', category: 'outside'},
      {id: 24, name: 'scrambling', category: 'mountain'},
      {id: 25, name: 'white watre rafting', category: 'water'},
      {id: 26, name: 'horse riding', category: 'outside'},
      {id: 27, name: 'gliding', category: 'air'}
    ]);
  });
};
