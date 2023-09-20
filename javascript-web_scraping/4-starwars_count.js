#!/usr/bin/node

const request = require('request');

const url = process.argv[2];

request(url, (error, response, body) => {
  if (error) console.log(error);
  // console.log(response.statusCode);

  const data = JSON.parse(body).results;
  let count = 0;

  data.forEach((movie) => {
    movie.characters.forEach((character) => {
      if (character.includes('18')) count++;
    });
  });
  console.log(count);
});
