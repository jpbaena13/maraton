const express = require("express");
const fs = require('fs');
const mysql = require('mysql');

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

const getData = () => {
  const users = process.argv[2];
  // Read firstnames
  let fileToRead = fs.openSync('./static/files/firstnames.csv', 'r'); 
  const firstnames = fs.readFileSync(fileToRead, {encoding: 'utf-8'}).split('\r\n');

  fileToRead = fs.openSync('./static/files/lastnames.csv', 'r'); 
  const lastnames = fs.readFileSync(fileToRead, {encoding: 'utf-8'}).split('\r\n');

  fileToRead = fs.openSync('./static/files/locations.csv', 'r');
  const locations = fs.readFileSync(fileToRead, {encoding: 'utf-8'}).split('\r\n');
  const entities = [];
  const activities = [];
  const directions = [];
  locations.forEach((location, idx) => {
    [entities[idx], activities[idx], directions[idx]] = location.split(';');
  });

  for (var i = 0; i < users; i++) {
    const user = {
      firstname: firstnames[Math.round(Math.random() * firstnames.length)],
      lastname: lastnames[Math.round(Math.random() * lastnames.length)],
      entity: entities[Math.round(Math.random() * entities.length)],
      direction: directions[Math.round(Math.random() * directions.length)],
      activities: []
    }
    const num = Math.round(Math.random() * 7);
    for (var j = 0; j < num; j++) {
      user.activities.push(activities[Math.floor(Math.random() * activities.length)])
    }
    
    if (user.activities.length >= 3) console.log(user);
  }
};

getData();

// app.get('/', function (req, res) {
// });

// app.listen(3000, () => {
//  console.log("El servidor está inicializado en el puerto 3000");
// });