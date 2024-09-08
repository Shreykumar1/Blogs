// database.js
const sqlite3 = require('sqlite3').verbose();

// Create or open the database
const db = new sqlite3.Database('./blog.db', (err) => {
  if (err) {
    console.error("Error opening database: " + err.message);
  } else {
    console.log("Connected to the SQLite database.");
    // Create the Posts table if it doesn't exist
    // db.run(`DROP TABLE IF EXISTS posts`);
    db.run(`CREATE TABLE IF NOT EXISTS posts (
            id TEXT PRIMARY KEY ,
            title TEXT NOT NULL,
            content TEXT NOT NULL,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
        )`, (err) => {
      if (err) {
        console.error("Error creating table: " + err.message);
      }
    });
  }
});

module.exports = db;
