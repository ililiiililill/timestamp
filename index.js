require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();

// enable CORS so API is remotely testable by FCC
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// make publc static
app.use(express.static('public'));

// route /index.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// route /api
app.use('/api', require('./routes/timeStamp'));

// listen for requests
const listener = app.listen(process.env.PORT, function () {
  console.log('App is listening on port ' + listener.address().port);
});
