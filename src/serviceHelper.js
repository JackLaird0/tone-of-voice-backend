const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3')
const credentials = require('./apiKey');

const toneAnalyzer = new ToneAnalyzerV3({
  version: '2017-09-21',
  username: credentials.username,
  password: credentials.password,
  headers: {
    "X-Watson-Learning-Opt-Out": true
  },
  url: 'https://gateway.watsonplatform.net/tone-analyzer/api/'
})

module.exports = toneAnalyzer 