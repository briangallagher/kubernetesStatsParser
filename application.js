var request = require('request');
var sampleStats = require('./lib/sampleStats');
var statsParser = require('./lib/statsParser');
var prometheusMetricsGenerator = require('./lib/prometheusMetricsGenerator');

var express = require('express');
var app = express();

app.get('/metrics', prometheusMetricsGenerator.getMetrics);

app.listen(8800, function () {
  console.log('Example app listening on port 8800!');
});
