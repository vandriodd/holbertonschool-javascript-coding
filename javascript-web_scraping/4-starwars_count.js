#!/usr/bin/node

const request = require('request');

const url = process.argv[2];

request(url, (error, response, body) => {
  if (error) console.log(error);
  // console.log(response.statusCode);

  const data = JSON.parse(body).results;
  let count = 0;

  data.filter((movie) => {
    if (movie.characters.includes(`https://swapi-api.hbtn.io/api/people/18/`)) {
      count++;
    }
  });
  console.log(count);
});
