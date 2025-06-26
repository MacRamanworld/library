'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('books', [
      {
        name:'The hobbbit',
        author: 'Tolkein',
        year_published: 1937
      },
      {
        name:'The hobbbit',
        author: 'rowling',
        year_published: 1937
      },
      {
        name:'The hobbbit',
        author: 'washinngton',
        year_published: 1937
      },
      {
        name:'The hobbbit',
        author: 'george orwell',
        year_published: 1937
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('books', null, {});
  }
};
