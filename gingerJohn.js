#!/usr/bin/env node
var fs = require('fs');
var outFile = "hello.txt";
var out = "<html><header><title>Ginger John Rulez</title></head><body><strong>A startup is a business built to grow rapidly.</strong></body></html>";
fs.writeFileSync(outFile, out);
// console.log("This script (" +__filename + ")\nWrote: " + out + " to " + outFile);

