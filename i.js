const express = require('express')
const hostile = require('hostile')

const defaultSites = {
  i: 'https://github.com/rgbkrk/i'
}
const userSites = require('./i.json')

/**
 * From an `i` configuration of sites, create the static homepage
 * @param  {Object} sites an object with structure { keyword1: URL1, keyword2: URL2 }
 * @return {string}       Full HTML to serve at /
 */
function craftHomepage (sites) {
  const keywords = Object.keys(sites)
  const links = keywords.map(keyword => `<li><a href="${sites[keyword]}">/${keyword}</a></li>`)
  return links.join('')
}

/**
 * createApp sets up the base redirect server
 * @return {express.app} The configured redirection server
 */
function createApp () {
  // Merge users and defaults, taking precedence on user defined
  const sites = Object.assign({}, defaultSites, userSites)
  const keywords = Object.keys(sites)

  const homepage = craftHomepage(sites)

  const app = express()

  // Set up a basic entry page for http://HOSTNAME/
  app.get('/', (req, res) => {
    res.send(homepage)
  })

  // Now for the redirects
  keywords.forEach(keyword => {
    const location = sites[keyword]

    app.get(`/${keyword}`, (req, res) => {
      res.redirect(location)
    })
  })

  // 404 for all else
  app.use(function (req, res) {
    const keyword = req.url.split('/').slice(1).join('/')
    res.status(404).send(`<b>${keyword}</b> does not exist, maybe you should add it`)
  })

  // Love that port 80
  app.listen(80, '127.0.0.1', function () {
    if (process.platform !== 'win32') {
      // Drop privileges on *nix systems
      process.setgid('nobody')
      process.setuid('nobody')
    }
    // ;)
    console.log('i is listening on port 80')
  })

  return app
}

const HOSTNAME = 'i'

// Configure the user's /etc/hosts entry
hostile.set('127.0.0.1', HOSTNAME, (err) => {
  if (err) {
    console.error(err)
    process.exitCode = 2
  } else {
    createApp()
  }
})
