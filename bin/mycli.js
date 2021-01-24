#!/usr/bin/env node
'use strict'
const program = require('commander')
const inquirer = require('inquirer')
const { green, blue, yellow, red } = require('../utils/chalk')
const create = require('../src/create.js')
const start = require('../src/start.js')

const question = [
  {
    name: 'name',
    message: '请输入项目名称？'
  }
]

program
  .command('start')
  .description('start a project!')
  .action(function () {
    green('欢迎使用mycli脚手架！')
    inquirer.prompt(question).then(answer => {
      create(answer)
    })
  })

program
  .command('build')
  .description('build a project!')
  .action(function () {
    green('-----构建项目-----')
    start('build').then(() => {
      green('-----构建完成-----')
    })
  })

program.parse(process.argv)
