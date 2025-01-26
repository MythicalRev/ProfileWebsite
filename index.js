// Values
const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {

  fetch('https://api.lanyard.rest/v1/users/501514913026408448', { 
    method: 'GET'
  })
  .then(function(response) { return response.json(); })
  .then(function(json) {
    res.render('home', { json: json });
  });
});

app.listen(8000, () => {
  console.log("Project is ready!");
});