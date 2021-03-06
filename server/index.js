'use strict';

const express = require('express');
const bodyParser = require('body-parser');
//const jwt = require('express-jwt');
//const jwks = require('jwks-rsa');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./funplanner_db.db');
//const secrets = require('./secrets');


const app = express();


//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


//AUTHENTICATION
// const authCheck = jwt({
//   secret: jwks.expressJwtSecret({
//         cache: true,
//         rateLimit: true,
//         jwksRequestsPerMinute: 5,
//         jwksUri: secrets.jwksUri
//     }),
//     audience: secrets.audience,
//     issuer: secrets.issuer,
//     algorithms: ['RS256']
// });


//DATABASE
//db.run('DROP TABLE adventures');

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS adventures (" +
    "id INTEGER PRIMARY KEY, " +
    "title VARCHAR(255), " +
    "category VARCHAR(255), " +
    "location VARCHAR(255), " +
    "link VARCHAR(255), " +
    "priority VARCHAR(255), " +
    "notes TEXT, " +
    "date_posted DATETIME, " +
    "posted_by VARCHAR(255))")
});

//db.run("INSERT INTO adventures (title, category, location, link, priority, notes, date_posted, posted_by) VALUES ('Chicken & Guns', 'Restaurants', 'Cartopia', '', 'medium', 'notes here', '12/04/2011 12:00:00 AM', 'Kevin')");

// db.all("SELECT * FROM adventures", (err, row) => {
//     console.log('Results: ' + row.toString())
// });



//routes

app.get('/api/adventures', (req, res) => {
  db.all("SELECT * FROM adventures", (err, row) => {
    res.status(200).send(row);
  });
});

app.post('/api/adventures', (req, res) => {
  const stmt = db.prepare("INSERT INTO adventures " + 
    "(title, category, location, link, priority, notes, date_posted, posted_by) " +
    "VALUES (?,?,?,?,?,?,?,?)");
  const values = [
    req.body.title,
    req.body.category,
    req.body.location,
    req.body.link,
    req.body.priority,
    req.body.notes,
    'NULL',
    'NULL'
  ];
  stmt.run(values);
  stmt.finalize();
});

app.post('/api/adventures/:adventureID', (req, res) => {
  const adventureID = parseInt(req.params.adventureID);
  const adventure = req.body;

  db.run("UPDATE adventures SET title = ?, category = ?, location = ?, " + 
    "link = ?, priority = ?, notes = ? " + 
    "WHERE id = " + adventureID,
    [req.body.title, req.body.category, req.body.location, req.body.link, req.body.priority,
        req.body.notes
    ]);
})

app.delete('/api/adventures/:adventureID', (req, res) => {
  const adventureID = parseInt(req.params.adventureID);
  db.run("DELETE FROM adventures WHERE id=" + adventureID + ";", (err, row) => {
    res.status(200).send();
  })
});


//listen
const port = process.env.PORT || 5001;
app.listen(port);
console.log('Listening on port ' + port);

