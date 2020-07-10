const Sequelize = require('sequelize');
const db = require('../config/database');

const Gig = db.define('tablemovie', {
  movieId: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4 // Or Sequelize.UUIDV1
  
  },
  movieName: {
    type: Sequelize.STRING
  },
  yearOfRelease: {
    type: Sequelize.DATE
  },
  crew: { 
    type: Sequelize.JSONB
  },
  overallrating: {
    type: Sequelize.INTEGER
  }
});

Gig.sync().then(() => {
  console.log('table created');
});
module.exports = Gig;