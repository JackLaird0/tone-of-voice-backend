const express = require('express'); 
const bodyParser = require('body-parser');
const toneAnalyzer = require('./src/serviceHelper')
const cors = require('express-cors');

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, x-token');

  next();
};

const app = express();
app.use(allowCrossDomain);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/v1/analysis', (request, response) => {
  const text = request.body.text
  response.setHeader('Content-Type', 'application/json')

  toneAnalyzer.tone({ tone_input: text, content_type: 'text/plain', sentences: false},
    (error, analysis) => {
      if (error) {
        console.log(error);
        throw(error)
      } else {
        response.status(200).json(analysis)
      }
    }
  )
})

app.listen(5000, () => {
  console.log('express running on localhost:5000')
})

module.exports = app