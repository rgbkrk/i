const express = require('express')
const app = express();

const sites = require('./i.json');

sites.forEach(entry => {
  const { location, keyword } = entry;
  if(!location || !keyword) {
    console.error(`entry ${entry} invalid`);
  }

  app.get(`/${keyword}`, (req, res) => {
    res.redirect(location);
  });
});

app.listen(1105, function() {
  console.log('i am listening on 1105'); 
});

