var express = require("express");
var app = express();

var PORT = 9123;

app.use(express.static(__dirname + '/public'));

app.get("/", function (req, res) {
  res.send("Hello from JFrog pipelines_3");
});

app.get("/api", function (req, res) {
  res.send({status: 200});
});

app.listen(PORT, function () {
  console.log('Express listening on port: ', PORT);
});
