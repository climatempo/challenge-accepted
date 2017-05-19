'use strict';
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster)
    for(let i = 0; i < numCPUs; i++) cluster.fork();
else
    require('./app.js');