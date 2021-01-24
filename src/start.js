const child_precess = require('child_process')
const chalk = require('chalk')
const fs = require('fs')

const currentPath = process.cwd() + '/node_modules/mycli-plugin'

module.exports = type => {
  return new Promise((resolve, reject) => {
    fs.access(currentPath, err => {
      if (err) {
        console.log( 
          chalk.red('please install mycli-react-webpack-plugin')   
        )
      } else {        
        const children = child_precess.fork(currentPath + '/index.js')
        children.on('message', message => {
          const msg = JSON.parse(message)
          if (msg.type === 'end') {
            children.kill()
            resolve()
          } else if (msg.type === 'error') {
            children.kill()
            reject()
          }
        })
        children.send(JSON.stringify({
          cwdPath: process.cwd(),
          type: type || 'build'
        }))
      }
    })
  })
}
