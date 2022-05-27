const { json } = require('express/lib/response');

// @desc get timestamp
// @route GET /api/:date
const getTimeStamp = (req, res) => {
  // empty date param uses current time
  let dateParam = req.params.date === undefined ? Date.now() : req.params.date;

  let timestamp = new Date(dateParam);
  let unixFormat = '';
  let utcFormat = '';

  // parameter is a number
  if (!isNaN(dateParam)) {
    unixFormat = Number(dateParam);
    utcFormat = new Date(Number(dateParam)).toUTCString();
  } // paramter is a date
  else if (timestamp instanceof Date && !isNaN(timestamp)) {
    unixFormat = Date.parse(timestamp);
    utcFormat = timestamp.toUTCString();
  } //parameter is invalid
  else {
    return res.status(400).json({ error: 'Invalid Date' });
  }

  res.status(200).json({ unix: unixFormat, utc: utcFormat });
};

module.exports = { getTimeStamp };
