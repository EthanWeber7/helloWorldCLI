#!/usr/bin/env node
"use strict";
var _a = require('./package.json'), description = _a.description, name = _a.name, version = _a.version;
// server.js
// console.log(process.argv)
var options = process.argv.slice(2);
var VERSION_MESSAGE = name + " " + version;
var HELP_MESSAGE = "" + VERSION_MESSAGE;
if (options.length < 1) {
    console.log(HELP_MESSAGE);
    process.exit();
}
var message = '';
if (options.includes('--version')) {
    console.log(VERSION_MESSAGE);
    process.exit();
}
else if (options.includes('--help')) {
    console.log(HELP_MESSAGE);
    process.exit();
}
options.map(function (arg) {
    switch (arg) {
        default:
            {
                message = message.concat(' ', arg);
            }
            ;
    }
});
console.info("" + message);
process.exit();
