
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sports').del()
    .then(function () {
      // Inserts seed entries
      return knex('sports').insert([
        {id: 1, name: 'surfing', category: 'water', description: 'For a lot of surfers, the best spot to surf would be the one where wind, swell, direction, tides, and seafloor meet. Wind creates the quality of the surfing waves, while its force and interaction with the direction of the swell, the tide in a certain hour, and type and status of the ocean floor create a certain wave condition.', image_url: 'https://images.unsplash.com/photo-1456207242739-ff52c0c7413c?auto=format&fit=crop&w=1517&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D' },
        {id: 2, name: 'skiing', category: 'mountain', description: 'the most consistently fresh and soft powder in the world.', image_url: 'https://images.unsplash.com/photo-1507492147080-3d1b3e5cd0aa?auto=format&fit=crop&w=1350&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'},
        {id: 3, name: 'mountain bike', category: 'mountain', description: 'The BEST Mountain Bike Trails in the World', image_url: 'https://images.unsplash.com/photo-1464067547789-52c82f429121?auto=format&fit=crop&w=701&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D' }
      ]);
    });
};
