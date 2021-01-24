const { green } = require('../utils/chalk.js')
const fs = require('fs')
const { yellow, blue, red } = require('chalk')
const npm = require('./npm.js')

let fileCount = 0 // 文件数量
let dirCount = 0 // 文件夹数量
let flat = 0 // readir数量

let isInstall = false // 下载依赖

function copy (sourcePath, currentPath, cb, projectName) {
  flat++
  fs.readdir(sourcePath, (err, paths) => {
    flat--
    if(err) throw err
    paths.forEach(path => {
      if(path !== '.git' && path !== 'package.json') fileCount++
      const newSourcePath = sourcePath + '/' + path
      const newCurrentPath = currentPath + '/' + path
      fs.stat(newSourcePath, (err, stat) => {
        if(err) throw err
        if (stat.isFile() && path !== 'package.json') {
          const readStream = fs.createReadStream(newSourcePath)
          const writeStream = fs.createWriteStream(newCurrentPath)
          readStream.pipe(writeStream)
          green('创建文件' + newCurrentPath)
          fileCount--
          completeControl(cb, projectName)
        } else if (stat.isDirectory()) {
          dirCount++
          dirExist(newSourcePath, newCurrentPath, copy, cb, projectName)
        }
      })
    })
  })
}

function runProject (projectName) {
  try {
    const start = npm(['start'], projectName)
    start()
  } catch (e) {
    red('自动启动失败，请手动重试！')
  }
}

function dirExist (sourcePath, currentPath, copyCallback, cb, projectName) {
  fs.access(currentPath, err => {
    if (err) {
      fs.mkdir(currentPath, () => {
        fileCount--
        dirCount--
        copyCallback(sourcePath, currentPath, cb, projectName)
        yellow('创建文件夹' + currentPath)
        completeControl(cb, projectName)
      })
    } else {      
      copyCallback(sourcePath, currentPath, cb, projectName)
    }
  })
}

function completeControl(cb, projectName) {
  if (fileCount === 0 && dirCount === 0 && flat === 0) {
    green('-----构建完成-----')
    if (cb && !isInstall) {
      isInstall = true
      blue('-----开始install-----')
      cb(() => {
        blue('-----完成install-----')
        runProject(projectName)
      })
    }
  }
}

module.exports = copy
