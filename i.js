const express = require('express')
const app = express();

const sites = require('./i.json');
const keywords = Object.keys(sites);

// Set up a basic entry page for http://i/
app.get('/', (req, res) => {
  const links = keywords.map(keyword => `<a href="${sites[keyword]}">i/${keyword}</a>`)
  links.forEach(link => {
    res.send(link);
  });

  res.end();
});

// Now for the redirects
keywords.forEach(keyword => {
  const location = sites[keyword];

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
