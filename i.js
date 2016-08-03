const express = require('express')
const app = express()

const defaultSites = {
  i: 'https://github.com/rgbkrk/i',
}
const userSites = require('./i.json')

// Merge users and defaults, taking precedence on user defined
const sites = Object.assign({}, defaultSites, userSites)
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

// 404 for all else
app.use(function(req, res) {
  const keyword = req.url.split('/').slice(1).join('/');
  res.status(404).send(`<b>${keyword}</b> does not exist, maybe you should add it`);
});

// Love that port 80
app.listen(80, '127.0.0.1', function() {
  // Ain't nobody gonna get in
  process.setgid('nobody')
  process.setuid('nobody')
  // ;)
  console.log('i is listening on port 80')
});
