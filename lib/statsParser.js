var request = require('request');

var currentStats = null;

setInterval(function () {
  getJSON(function (err, body) {
    if (err) {
      console.log('Error getting stats so waiting for next interval');
    } else {
      // reset current stats
      currentStats = {
        'pods': []
      };

      parseStats(body);
    }
  });
}, 3000);

function getJSON(cb) {

  var b;
  console.log('getting JSON from server:');

  request.get({
      url: 'http://192.168.99.100:10255/stats/summary'
    },
    function (err, httpResponse, body) {
      if (err) {
        console.error('Error trying to retrieve stats from server');
        console.log(err);
      } else {
        console.log('got body from JSON stats query');
        try {
          var b = JSON.parse(body);
          cb(null, b);
        } catch (e) {
          console.error('Error parsing body');
          cb('Error parsing body');
        }
      }
    });
}

function parseStats(body) {

  var pods = [];
  var result = {};

  if (body.pods && body.pods.length) {

    // First strip out all the pods that are relevant
    for (var i = 0; i < body.pods.length; i++) {
      if (body.pods[i].podRef && body.pods[i].podRef.name) {
        if (body.pods[i].podRef.name.indexOf('nodeloadtest') > -1) {
          // console.log('Found node load test pod');
          pods.push(body.pods[i]);
        }
      } else {
        console.error('No pod name');
      }
    }

    if (pods.length > 0) {

      // then calculate
      var cpuNanoTotal = 0;
      var memoryBytesTotal = 0;
      for (var j = 0; j < pods.length; j++) {
        if (pods[j].containers && pods[j].containers[0]) {
          // Get totals
          var cont = pods[j].containers[0];
          cpuNanoTotal += cont.cpu.usageNanoCores;
          memoryBytesTotal += cont.memory.usageBytes;

          // set individual pods
          var item = {
            'cpu': Math.floor(cont.cpu.usageNanoCores / 1000000),
            'memory': Math.floor(cont.memory.usageBytes / 1000000),
            'name': 'nodeloadtest-pod-' + (j + 1)
          };
          currentStats.pods.push(item);

        } else {
          console.error('No containers present on pods');
        }
      }

      if (cpuNanoTotal > 0 && memoryBytesTotal > 0) {
        // 1000 * [nano - cores] = [micro - cores](not[milli - cores]).
        currentStats.cpuMilliTotal = Math.floor(cpuNanoTotal / 1000000);
        currentStats.memoryMBTotal = Math.floor(memoryBytesTotal / 1000000);
        currentStats.numActivePods = pods.length;
        currentStats.container = pods[0].containers[0].name;
        currentStats.podName = pods[0].podRef.name;
        currentStats.namespace = pods[0].podRef.namespace;

        console.log('set new current stats');
        console.log(JSON.stringify(currentStats));

      } else {
        console.log('CPU and memory are still 0 for not changing');
      }
    }
  }
}

exports.getCurrentStats = function () {
  return currentStats;
};
