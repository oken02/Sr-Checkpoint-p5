import Sequelize from 'sequelize';

// const db = new Sequelize('postgres://localhost:5432/checkpoint_senior', {
//     logging: false
// });

var db = new Sequelize("checkpoint_senior", "oken02", "nose123", {
    logging: false,
    dialect:"postgres"
  });

export default db;


// var db = new Sequelize("checkpoint_senior", "oken02", "nose123", {
//   logging: false,
//   dialect:"postgres"
// });

// module.exports = db;
