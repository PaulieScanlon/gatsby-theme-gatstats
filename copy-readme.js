const fs = require('fs')

fs.copyFile('./README.md', './gatsby-theme-gatstats/README.md', err => {
  if (err) {
    throw err
  }
  console.log('README copied to theme ok!')
})
