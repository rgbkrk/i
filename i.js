const express = require('express')
const app = express()

const sites = require('./i.json')
const keywords = Object.keys(sites)

const links = keywords.map(keyword => `<li><a href="${sites[keyword]}">/${keyword}</a></li>`)
const homepage = links.join('')

// Set up a basic entry page for http://HOSTNAME/
app.get('/', (req, res) => {
  res.send(homepage)
});

// Now for the redirects
keywords.forEach(keyword => {
  const location = sites[keyword]

  app.get(`/${keyword}`, (req, res) => {
    res.redirect(location)
  })
})

// Love that port 80
app.listen(80, '127.0.0.1', function() {
  // Ain't nobody gonna get in
  process.setgid('nobody')
  process.setuid('nobody')
  // ;)
  console.log('i is listening on port 80')
});
