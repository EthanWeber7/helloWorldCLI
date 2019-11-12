#!/usr/bin/env node
const { description, name, version } = require('./package.json');
// server.js
// console.log(process.argv)

const options = process.argv.slice(2)
const VERSION_MESSAGE = `${name} ${version}`
const HELP_MESSAGE = `${VERSION_MESSAGE}`

if(options.length < 1) { console.log(HELP_MESSAGE); process.exit();}

let message = ''

if (options.includes('--version')) {
    console.log(VERSION_MESSAGE);
    process.exit();
  } else if (options.includes('--help')) {
    console.log(HELP_MESSAGE);
    process.exit();
  } 

options.map(arg => {
    switch(arg){
        default: { message = message.concat(' ', arg);};
    }
});

console.info(`${message}`);
process.exit();