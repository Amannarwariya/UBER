const mongoose = require("mongoose");

function connectToDatabase() {
  mongoose.connect(process.env.DB_connect, {
    })
    .then(() => {
      console.log("Connecting to database");
    })
    .catch((err) => {
      console.error("Error connecting to the database", err);
    });
}

module.exports = connectToDatabase;
