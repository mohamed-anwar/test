var app = require('express')();
var gad = require('node-auto-deploy')

app.post('/webhook', function(req, res) {
  gad.deploy();
  res.sendStatus(200);  // OK
});

app.listen(5555);
