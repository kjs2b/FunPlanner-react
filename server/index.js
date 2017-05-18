const express = require('express');
const bodyParser = require('body-parser');

//db
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./funplanner_db.db');


const app = express();


//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//data (to be replaced by database):
const adventureData = [
  {
    title: 'Lovely\'s Fifty Fifty',
    addedBy: 'Love',
    location: 'N Portland',
    category: 'Restaurants',
    notes: '',
    priority: 8,
    link: 'https://lovelysfiftyfifty.wordpress.com/'
  },
  {
    title: 'Dog Mountain',
    addedBy: 'Love',
    location: 'East of Portland',
    category: 'Hikes',
    notes: '',
    priority: 4,
    link: 'http://www.oregonhikers.org/field_guide/Dog_Mountain_Hike'
  },
    {
    title: 'Vacuum Museum',
    addedBy: 'Love',
    location: 'Downtown',
    category: 'Attractions',
    notes: 'This place sucks',
    priority: 6,
    link: 'http://starks.com/vacuum-museum'
  },
    {
    title: 'Swim the Columbia',
    addedBy: 'Kevin',
    location: 'North of Portland',
    category: 'Hikes',
    notes: 'Ok, not exactly a hike',
    priority: 3,
    link: null
  },
    {
    title: 'Tasty n Alder',
    addedBy: 'Kevin',
    location: 'SE Portland',
    category: 'Restaurants',
    notes: 'Let\'s take my parents there',
    priority: 4,
    link: 'http://www.tastynalder.com/'
  },
    {
    title: 'Le Pantry',
    addedBy: 'Love',
    location: 'SE Portland',
    category: 'Restaurants',
    notes: 'But we always go there!',
    priority: 9,
    link: 'https://www.yelp.com/biz/le-pantry-portland'
  },
    {
    title: 'Next Level Burger',
    addedBy: 'Kevin',
    location: 'SE Portland',
    category: 'Restaurants',
    notes: 'Sorry I went without you',
    priority: 6,
    link: 'http://www.nextlevelburger.com/'
  },
    {
    title: 'South Park Seafood',
    addedBy: 'Kevin',
    location: 'Downtown',
    category: 'Restaurants',
    notes: 'What even is downtown, though?',
    priority: 8,
    link: 'http://southparkseafood.com/'
  }
];


//db
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

db.run("INSERT INTO adventures (title, category, location, link, priority, notes, date_posted, posted_by) VALUES ('Chicken & Guns', 'Restaurants', 'Cartopia', '', 'medium', 'notes here', '12/04/2011 12:00:00 AM', 'Kevin')");

// db.all("SELECT * FROM adventures", (err, row) => {
//     console.log('Results: ' + row.toString())
// });



//routes
// app.get('/api/adventures', (req, res) => {
//   res.status(200).send(adventureData);
// });

app.get('/api/adventures', (req, res) => {
  db.all("SELECT * FROM adventures", (err, row) => {
    res.status(200).send(row);
  });
});

app.post('/api/adventures', (req, res) => {
  console.log(req.body);
  const stmt = db.prepare('INSERT INTO adventures VALUES (?,?,?,?,?,?,?,?,?)');
  const values = [
    'NULL',
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



//listen
const port = process.env.PORT || 3001;
app.listen(port);
console.log('Listening on port ' + port);

