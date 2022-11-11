const express = require("express");
const fs = require('fs');
const mysql = require('mysql');
var cors = require('cors')

const app = express();

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'maraton'
});

// connection.connect();
 
// connection.query('SELECT * FROM users', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results);
// });
 
// connection.end();

app.use(express.static('static'));
app.use(express.json());
app.use(cors())

let firstnames;
let lastnames;
let entities = [];
let activities = [];
let directions = [];

const getData = () => {
  // const numUsers = process.argv[2];
  const numUsers = 3;
  const users = [];
  // Read firstnames
  let fileToRead = fs.openSync('./static/files/firstnames.csv', 'r'); 
  firstnames = fs.readFileSync(fileToRead, {encoding: 'utf-8'}).split('\r\n');

  fileToRead = fs.openSync('./static/files/lastnames.csv', 'r'); 
  lastnames = fs.readFileSync(fileToRead, {encoding: 'utf-8'}).split('\r\n');

  fileToRead = fs.openSync('./static/files/locations.csv', 'r');
  const locations = fs.readFileSync(fileToRead, {encoding: 'utf-8'}).split('\r\n');
  locations.forEach((location, idx) => {
    [entities[idx], activities[idx], directions[idx]] = location.split(';');
  });

  for (var i = 0; i < numUsers; i++) {
    const user = {
      firstname: firstnames[Math.round(Math.random() * firstnames.length)],
      lastname: lastnames[Math.round(Math.random() * lastnames.length)],
      entity: entities[Math.round(Math.random() * entities.length)],
      direction: directions[Math.round(Math.random() * directions.length)],
      created_at: new Date().getTime(),
      activities: []
    }
    const num = Math.round(Math.random() * 7);
    for (var j = 0; j < num; j++) {
      user.activities.push(activities[Math.floor(Math.random() * activities.length)])
    }

    users.push(user);
    
    // if (user.activities.length >= 3) console.log(user);
  }

  fs.appendFile('./static/files/users.csv', JSON.stringify(users), function (err) {});
};

getData();

app.get('/', function (req, res) {
  res.json([]);
  return res.end();
});

app.get('/entities', function (req, res) {
  res.json(entities);
  return res.end();
});

app.get('/activities', function (req, res) {
  res.json(activities);
  return res.end();
});


app.listen(3000, () => {
  console.log("El servidor está inicializado en el puerto 3000");
});