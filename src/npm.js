const which = require('which')

function findNpm () {
  const npms = process.platform === 'win32' ? ['npm.cmd'] : ['npm']
  for (let i = 0; i < npms.length; i++) {
    try {
      which.sync(npms[i])
      console.log('use npm:' + npms[i])
      return npms[i]
    } catch {}
  }
  throw new Error('please install npm')
}

function runCmd (cmd, args = [], fn, projectName) {
  console.log(args, projectName)
  const runner = require('child_process').spawn(cmd, args, {
    cwd: process.cwd() + '/' + projectName,
    stdio: 'inherit'
  })
  runner.on('close', function (code) {
    if (fn) {
      fn(code)
    }
  })
}

module.exports = function (installArg = ['install'], projectName) {
  const npm = findNpm()
  return function (done) {
    runCmd(which.sync(npm), installArg, function() {
      done && done() 
    }, projectName)
  }
}
