var Prometheus = require('prometheus-client');
var statsParser = require('./statsParser');

var client = new Prometheus();

var cpuGauge = client.newGauge({
  name: 'stats_parser_cpu_usage_milli_cores',
  help: 'Total CPU usage in millicores across all pods'
});

var memoryGauge = client.newGauge({
  name: 'stats_parser_memory_usage_bytes',
  help: 'Total Memory usage across all pods.'
});

var activePodGauge = client.newGauge({
  name: 'stats_parser_num_active_pods',
  help: 'Represents the current number of active pods'
});

var singlePodCPU = client.newGauge({
  name: 'stats_parser_cpu_single_pod',
  help: 'Represents the CPU usage in millicores of a single pod'
});

var singlePodMemory = client.newGauge({
  name: 'stats_parser_memory_single_pod',
  help: 'Represents the Memory usage in MB of a single pod'
});

setInterval(function () {
  var stats = statsParser.getCurrentStats();
  setGauges(stats);
}, 2000);

function setGauges(stats) {

  if (stats && stats.container) {
    cpuGauge.set({
      'container': stats.container,
      'namespace': stats.namespace,
      // 'pod': stats.podName,
    }, stats.cpuMilliTotal);

    memoryGauge.set({
      'container': stats.container,
      'namespace': stats.namespace,
      // 'pod': stats.podName,
    }, stats.memoryMBTotal);

    activePodGauge.set({
      'container': stats.container,
      'namespace': stats.namespace,
      // 'pod': stats.podName,
    }, stats.numActivePods);

    for (var i = stats.pods.length - 1; i >= 0; i--) {
      var pod = stats.pods[i];

      console.log(pod.cpu);

      // TODO: only if number add it

      singlePodCPU.set({
        'container': stats.container,
        'namespace': stats.namespace,
        'podName': pod.name
      }, pod.cpu);

      singlePodMemory.set({
        'container': stats.container,
        'namespace': stats.namespace,
        'podName': pod.name
      }, pod.memory);

    }

  }
}

exports.getMetrics = client.metricsFunc();

// stats_parser_cpu_usage_nano_cores {container='nodeloadtestv2',namespace='default',pod='nodeloadtestv2-354078005-58guc'} 1862887
// stats_parser_memory_usage_bytes {container='nodeloadtestv2',namespace='default',pod='nodeloadtestv2-354078005-58guc'} 58556416
// stats_parser_num_active_pods {container='nodeloadtestv2',namespace='default',pod='nodeloadtestv2-354078005-58guc'} 4

// 1000 * [nano - cores] = [micro - cores](not[milli - cores]).
// currentStats.cpuMilliTotal = Math.floor(cpuNanoTotal / 1000000);
// currentStats.memoryMBTotal = Math.floor(memoryBytesTotal / 1000000);
// currentStats.numActivePods = pods.length;
// currentStats.container = pods[0].containers[0].name;
// currentStats.podName = pods[0].podRef.name;
// currentStats.namespace = pods[0].podRef.namespace;
