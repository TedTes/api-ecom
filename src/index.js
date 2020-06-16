'use strict';

const app = require('./app');
// const port = app.get('port');
const name = app.get('name');
const port=process.env.PORT || 3030;
const server = app.listen(port);

server.on('listening', () =>
  console.log(`${name} started at http://${app.get('host')}:${port}`)
);
