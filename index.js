var app = require('express')();
var gad = require('node-auto-deploy')

app.post('/webhook', function(req, res) {
  gad.deploy();
});

app.listen(80);
