const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./funplanner_db.db');
const check;

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS adventures (" +
    "id INT NOT NULL AUTO_INCREMENT, " +
    "title VARCHAR(255), " +
    "category VARCHAR(255), " +
    "location VARCHAR(255), " +
    "link VARCHAR(255), " +
    "priority VARCHAR(255), " +
    "notes TEXT, " +
    "date_posted DATETIME, " +
    "posted_by VARCHAR(255), " +
    "PRIMARY KEY (id))");
});

db.close();