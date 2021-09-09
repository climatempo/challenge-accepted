var mongoose = require("mongoose")
var config = require("config")

'use strict'

function _connection() {
  var username = config.get('mongo.username').
      password = config.get('mongo.password'),
      server = config.get('mongo.server'),
      port = config.get('mongo.port'),
      database = config.get('mongo.database'),
      auth = username ? username + ":" + password + "@" : '';
      return 'mongodb://' + auth + server + ":" + port + "/" + database;
}

mongoose.connect(_connection(), 
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  }
);

var db = mongoose.connection;

db.on('error', function (err) {
  console.log(err)
});

db.once('open', function (callback) {
  console.log('Conectado ao mongo')
});

module.exports = mongoose