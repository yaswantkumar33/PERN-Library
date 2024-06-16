'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('books', [
      {
        name: "Atomic Habits",
        author: "James Clear ",
        year_published: 2075,
      },
      {
        name: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki ",
        year_published: 2075,

      },
      {
        name: "Art Of Being Alone ",
        author: "Renuka Gavrani",
        year_published: 2075,

      },
      {
        name: "48 Laws Of Power",
        author: "Robert Greene",
        year_published: 2075,

      }
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */ await queryInterface.bulkDelete('books', null, {});
  }
};
