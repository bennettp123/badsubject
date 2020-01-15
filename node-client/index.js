const fetch = require('node-fetch');

fetch('https://github.com/')
  .catch(err => console.error(err))

fetch('https://badsubject/')
  .catch(err => console.error(err))  

