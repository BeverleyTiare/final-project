// Purpose: to seed the database with user data
const db = require('../config/connection');
const userSeeds = require('./userSeeds.json');
const { User } = require('../models');
//const { Sleep } = require('../models');

// async function to seed the database
//include sleep function ??
db.once("open", async () => {
  try {
    await User.deleteMany({});

    await User.create(userSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('all done!');
  process.exit(0);
});
