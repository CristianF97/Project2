'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Dishes', [{
        name: 'alan',
        price: 10,
        description: 'none',
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Dishes', null, {});
  }
};
