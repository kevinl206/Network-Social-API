const connection = require('../config/connection');
const { Course, Student } = require('../models');

connection.on('error', (err) => err);

// Creates a connection to mongodb
connection.once("open", async () => {
    console.log("connected");

});


  // Add Users to the collection and await the results
  await Users.collection.insertMany(users);


  // Log out the seed data to indicate what should appear in the database
  console.table(students);
  console.info('Seeding complete! 🌱');
  process.exit(0);
;