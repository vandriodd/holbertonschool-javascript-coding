#!/usr/bin/node

const request = require('request');

const id = process.argv[2];
const url = `https://swapi-api.hbtn.io/api/films/${id}`;

request(url, (error, response, body) => {
  if (error) console.log(error);

  // console.log(`code: ${response.statusCode}`);

  const data = JSON.parse(body);
  const title = data.title;
  console.log(title);
});
