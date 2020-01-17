'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reservation', [{
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   firstName: "Mario",
   lastName: "Vizcaino",
   phoneNumber: "248-6223344",
   email: "248-6223344",
   date: "12/12/20",
   numberOfGuest: "4",
   comment: "Dinner time",
  
  }]);
},
  down: (queryInterface, Sequelize) => {
    
      // Add reverting commands here.
      // Return a promise to correctly handle asynchronicity.

      
      return queryInterface.bulkDelete('Reservation', null, {});
    
  }
};
