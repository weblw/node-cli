const { green, blue, yellow, red } = require('../utils/chalk')
const fs = require('fs')
const npm = require('./npm.js')
const copy = require('./copy.js')

module.exports = function (res) {
  green('-----开始构建-----')
  yellow('当前目录', __dirname)
  const sourcePath = __dirname.slice(0, -3) + 'template'
  blue('当前路径：' + process.cwd())  
  const filePath = process.cwd() + '/' + res.name
  fs.mkdir(filePath, () => {
    revisePackageJson(res, sourcePath).then(() => {
      green('创建 package.json 成功！')
      copy(sourcePath, filePath, npm(['install'], res.name), res.name)
    })
  })
}

function revisePackageJson(res, sourcePath) {
  return new Promise((resolve) => {
    fs.readFile(sourcePath + '/package.json', (err, data) => {
      if (err) throw err
      const { name } = res
      let json = data.toString()
      json = json.replace(/name/g, name.trim())
      const path = process.cwd() + '/' + name + '/package.json'
      fs.writeFile(path, Buffer.from(json), () => {
        green('创建文件' + path)
        resolve()
      })
    })
  })
}
