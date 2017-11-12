exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sports').del()
  .then(function () {
    // Inserts seed entries
    return knex('sports').insert([
      {sport_id: 1, sport_name: 'surfing', sport_category: 'water'},
      {sport_id: 2, sport_name: 'skiing', sport_category: 'mountain'},
      {sport_id: 3, sport_name: 'mountain biking', sport_category: 'mountain'},
      {sport_id: 4, sport_name: 'snorkeling', sport_category: 'water'},
      {sport_id: 5, sport_name: 'running', sport_category: 'outside'},
      {sport_id: 6, sport_name: 'rock climbing', sport_category: 'mountain'},
      {sport_id: 7, sport_name: 'kitesurfing', sport_category: 'water'},
      {sport_id: 8, sport_name: 'parasailing', sport_category: 'water'},
      {sport_id: 9, sport_name: 'hiking', sport_category: 'mountain'},
      {sport_id: 10, sport_name: 'diving', sport_category: 'water'},
      {sport_id: 11, sport_name: 'kayaking', sport_category: 'water'},
      {sport_id: 12, sport_name: 'paragliding', sport_category: 'air'},
      {sport_id: 13, sport_name: 'skydiving', sport_category: 'air'},
      {sport_id: 14, sport_name: 'golf', sport_category: 'outside'},
      {sport_id: 15, sport_name: 'windsurfing', sport_category: 'water'},
      {sport_id: 16, sport_name: 'snowboarding', sport_category: 'mountain'},
      {sport_id: 17, sport_name: 'treeking', sport_category: 'mountain'},
      {sport_id: 18, sport_name: 'ice climbing', sport_category: 'mountain'},
      {sport_id: 19, sport_name: 'parachuting', sport_category: 'air'},
      {sport_id: 20, sport_name: 'caving', sport_category: 'mountain'},
      {sport_id: 21, sport_name: 'cave diving', sport_category: 'water'},
      {sport_id: 22, sport_name: 'canyoning', sport_category: 'water'},
      {sport_id: 23, sport_name: 'cycling', sport_category: 'outside'},
      {sport_id: 24, sport_name: 'scrambling', sport_category: 'mountain'},
      {sport_id: 25, sport_name: 'white water rafting', sport_category: 'water'},
      {sport_id: 26, sport_name: 'horse riding', sport_category: 'outside'},
      {sport_id: 27, sport_name: 'gliding', sport_category: 'air'}
    ]);
  });
};
