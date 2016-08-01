const express = require('express')
const app = express();

const sites = require('./i.json');

// Set up a basic entry page for http://i/
app.get('/', (req, res) => {
  const links = sites.map(x => `<a href="${x.location}">i/${x.keyword}</a>`)
  links.forEach(link => {
    res.send(link);
  });

  res.end();
});

// Now for the redirects
sites.forEach(entry => {
  const { location, keyword } = entry;
  if(!location || !keyword) {
    console.error(`entry ${entry} invalid`);
  }

  app.get(`/${keyword}`, (req, res) => {
    res.redirect(location);
  });
});

// Love that port 80
app.listen(80, '127.0.0.1', function() {
  // Ain't nobody gonna get in
  process.setgid('nobody');
  process.setuid('nobody');
  // ;)
  console.log('i is listening on port 80'); 
});

