#!/usr/bin/node

const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const content = process.argv[3];

request(url, (error, response, body) => {
  if (error) console.log(error);
  // console.log(response.statusCode);
  fs.writeFile(content, body, 'utf-8', () => {});
});
