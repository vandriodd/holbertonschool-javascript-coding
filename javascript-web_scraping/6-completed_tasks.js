#!/usr/bin/node

const request = require('request');

const url = process.argv[2];

request(url, (error, response, body) => {
  if (error) console.log(error);
  // console.log(response.statusCode);

  const todos = JSON.parse(body);
  const completedTasks = todos.reduce((count, todo) => {
    if (todo.completed) count[todo.userId] = (count[todo.userId] || 0) + 1;
    return count;
  }, {});
  console.log(completedTasks);
});
