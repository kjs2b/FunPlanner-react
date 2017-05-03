const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//data (to be replaced by db)
const adventures = [
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
    notes: 'Ok, not exatly a hike',
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

//Middleware:
app.use(bodyParser.json());
//app.use(cors());


//Endpoints
app.get('/adventures', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.status(200).send(adventures);
});

//Listen
const port = process.env.PORT || 4040;
app.listen(port);
console.log('Listening on port ' + port);