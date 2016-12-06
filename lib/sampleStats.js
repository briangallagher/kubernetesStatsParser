exports.data = {
  "node": {
    "nodeName": "minikube",
    "systemContainers": [{
      "name": "kubelet",
      "startTime": "2016-12-03T11:25:59Z",
      "cpu": {
        "time": "2016-12-05T20:21:45Z",
        "usageNanoCores": 296596426,
        "usageCoreNanoSeconds": 5019422868520
      },
      "memory": {
        "time": "2016-12-05T20:21:45Z",
        "availableBytes": 637485056,
        "usageBytes": 1748017152,
        "workingSetBytes": 1461997568,
        "rssBytes": 372473856,
        "pageFaults": 119316597,
        "majorPageFaults": 10
      },
      "rootfs": {
        "availableBytes": 12500975616,
        "capacityBytes": 19195224064,
        "inodesFree": 2263952,
        "inodes": 2436448
      },
      "logs": {
        "availableBytes": 1631391744,
        "capacityBytes": 1889538048,
        "inodesFree": 251265,
        "inodes": 256284
      },
      "userDefinedMetrics": null
    }, {
      "name": "runtime",
      "startTime": "2016-12-03T11:25:59Z",
      "cpu": {
        "time": "2016-12-05T20:21:45Z",
        "usageNanoCores": 296596426,
        "usageCoreNanoSeconds": 5019422868520
      },
      "memory": {
        "time": "2016-12-05T20:21:45Z",
        "availableBytes": 637485056,
        "usageBytes": 1748017152,
        "workingSetBytes": 1461997568,
        "rssBytes": 372473856,
        "pageFaults": 119316597,
        "majorPageFaults": 10
      },
      "rootfs": {
        "availableBytes": 12500975616,
        "capacityBytes": 19195224064,
        "inodesFree": 2263952,
        "inodes": 2436448
      },
      "logs": {
        "availableBytes": 1631391744,
        "capacityBytes": 1889538048,
        "inodesFree": 251265,
        "inodes": 256284
      },
      "userDefinedMetrics": null
    }],
    "startTime": "2016-12-03T11:25:59Z",
    "cpu": {
      "time": "2016-12-05T20:21:45Z",
      "usageNanoCores": 296596426,
      "usageCoreNanoSeconds": 5019422868520
    },
    "memory": {
      "time": "2016-12-05T20:21:45Z",
      "availableBytes": 637485056,
      "usageBytes": 1748017152,
      "workingSetBytes": 1461997568,
      "rssBytes": 372473856,
      "pageFaults": 119316597,
      "majorPageFaults": 10
    },
    "network": {
      "time": "2016-12-05T20:21:45Z",
      "rxBytes": 185750770,
      "rxErrors": 0,
      "txBytes": 1863778,
      "txErrors": 0
    },
    "fs": {
      "availableBytes": 1631391744,
      "capacityBytes": 1889538048,
      "usedBytes": 258146304,
      "inodesFree": 251265,
      "inodes": 256284
    },
    "runtime": {
      "imageFs": {
        "availableBytes": 12500975616,
        "capacityBytes": 19195224064,
        "usedBytes": 2788185637,
        "inodesFree": 2263952,
        "inodes": 2436448
      }
    }
  },
  "pods": [{
    "podRef": {
      "name": "kube-addon-manager-minikube",
      "namespace": "kube-system",
      "uid": "46ae05e07c52d84167b077b142aa4a39"
    },
    "startTime": "2016-12-03T11:26:05Z",
    "containers": [{
      "name": "kube-addon-manager",
      "startTime": "2016-12-03T11:26:05Z",
      "cpu": {
        "time": "2016-12-05T20:21:37Z",
        "usageNanoCores": 0,
        "usageCoreNanoSeconds": 822289601616
      },
      "memory": {
        "time": "2016-12-05T20:21:37Z",
        "usageBytes": 42307584,
        "workingSetBytes": 38039552,
        "rssBytes": 331776,
        "pageFaults": 57627733,
        "majorPageFaults": 510
      },
      "rootfs": {
        "availableBytes": 12500975616,
        "capacityBytes": 19195224064,
        "usedBytes": 704512,
        "inodesFree": 2263952,
        "inodes": 2436448
      },
      "logs": {
        "availableBytes": 1631391744,
        "capacityBytes": 1889538048,
        "usedBytes": 98304,
        "inodesFree": 251265,
        "inodes": 256284
      },
      "userDefinedMetrics": null
    }],
    "network": {
      "time": "2016-12-05T20:21:41Z",
      "rxBytes": 185750770,
      "rxErrors": 0,
      "txBytes": 1863778,
      "txErrors": 0
    }
  }, {
    "podRef": {
      "name": "kube-state-metrics-deployment-830856031-cxhpb",
      "namespace": "default",
      "uid": "7b93954c-b951-11e6-bc81-4e38fb9816c5"
    },
    "startTime": "2016-12-03T12:10:30Z",
    "containers": [{
      "name": "kube-state-metrics",
      "startTime": "2016-12-03T12:10:30Z",
      "cpu": {
        "time": "2016-12-05T20:21:34Z",
        "usageNanoCores": 644844,
        "usageCoreNanoSeconds": 16925296196
      },
      "memory": {
        "time": "2016-12-05T20:21:34Z",
        "availableBytes": 194170880,
        "usageBytes": 15552512,
        "workingSetBytes": 15544320,
        "rssBytes": 15482880,
        "pageFaults": 6102,
        "majorPageFaults": 13
      },
      "rootfs": {
        "availableBytes": 12500975616,
        "capacityBytes": 19195224064,
        "usedBytes": 36864,
        "inodesFree": 2263952,
        "inodes": 2436448
      },
      "logs": {
        "availableBytes": 1631391744,
        "capacityBytes": 1889538048,
        "usedBytes": 16384,
        "inodesFree": 251265,
        "inodes": 256284
      },
      "userDefinedMetrics": null
    }],
    "network": {
      "time": "2016-12-05T20:21:36Z",
      "rxBytes": 14247499,
      "rxErrors": 0,
      "txBytes": 16243140,
      "txErrors": 0
    }
  }, {
    "podRef": {
      "name": "heapster-4027373682-5i3c0",
      "namespace": "kube-system",
      "uid": "82f94f77-b0bd-11e6-aaf1-e20e3cb14eb6"
    },
    "startTime": "2016-12-03T11:26:05Z",
    "containers": [{
      "name": "heapster",
      "startTime": "2016-12-03T11:26:28Z",
      "cpu": {
        "time": "2016-12-05T20:21:44Z",
        "usageNanoCores": 167891,
        "usageCoreNanoSeconds": 13313297409
      },
      "memory": {
        "time": "2016-12-05T20:21:44Z",
        "usageBytes": 18284544,
        "workingSetBytes": 18190336,
        "rssBytes": 17952768,
        "pageFaults": 18180,
        "majorPageFaults": 55
      },
      "rootfs": {
        "availableBytes": 12500975616,
        "capacityBytes": 19195224064,
        "usedBytes": 28672,
        "inodesFree": 2263952,
        "inodes": 2436448
      },
      "logs": {
        "availableBytes": 1631391744,
        "capacityBytes": 1889538048,
        "usedBytes": 1609728,
        "inodesFree": 251265,
        "inodes": 256284
      },
      "userDefinedMetrics": null
    }],
    "network": {
      "time": "2016-12-05T20:21:41Z",
      "rxBytes": 86839495,
      "rxErrors": 0,
      "txBytes": 36068981,
      "txErrors": 0
    }
  }, {
    "podRef": {
      "name": "prometheus-2921682974-w99eh",
      "namespace": "monitoring",
      "uid": "dc749179-ba61-11e6-bc81-4e38fb9816c5"
    },
    "startTime": "2016-12-04T20:40:15Z",
    "containers": [{
      "name": "prometheus",
      "startTime": "2016-12-04T20:40:16Z",
      "cpu": {
        "time": "2016-12-05T20:21:33Z",
        "usageNanoCores": 2951570,
        "usageCoreNanoSeconds": 78528998495
      },
      "memory": {
        "time": "2016-12-05T20:21:33Z",
        "availableBytes": 2482962432,
        "usageBytes": 180539392,
        "workingSetBytes": 138477568,
        "rssBytes": 133259264,
        "pageFaults": 35289,
        "majorPageFaults": 0
      },
      "rootfs": {
        "availableBytes": 12500975616,
        "capacityBytes": 19195224064,
        "usedBytes": 36864,
        "inodesFree": 2263952,
        "inodes": 2436448
      },
      "logs": {
        "availableBytes": 1631391744,
        "capacityBytes": 1889538048,
        "usedBytes": 53248,
        "inodesFree": 251265,
        "inodes": 256284
      },
      "userDefinedMetrics": null
    }],
    "network": {
      "time": "2016-12-05T20:21:38Z",
      "rxBytes": 80017151,
      "rxErrors": 0,
      "txBytes": 11794755,
      "txErrors": 0
    }
  }, {
    "podRef": {
      "name": "nodeloadtestv2-354078005-l84wx",
      "namespace": "default",
      "uid": "b1814666-bb25-11e6-bc81-4e38fb9816c5"
    },
    "startTime": "2016-12-05T20:02:05Z",
    "containers": [{
      "name": "nodeloadtestv2",
      "startTime": "2016-12-05T20:02:05Z",
      "cpu": {
        "time": "2016-12-05T20:21:40Z",
        "usageNanoCores": 1862887,
        "usageCoreNanoSeconds": 3615395710
      },
      "memory": {
        "time": "2016-12-05T20:21:40Z",
        "availableBytes": 151580672,
        "usageBytes": 58556416,
        "workingSetBytes": 58134528,
        "rssBytes": 57864192,
        "pageFaults": 50363,
        "majorPageFaults": 11
      },
      "rootfs": {
        "availableBytes": 12500975616,
        "capacityBytes": 19195224064,
        "usedBytes": 28672,
        "inodesFree": 2263952,
        "inodes": 2436448
      },
      "logs": {
        "availableBytes": 1631391744,
        "capacityBytes": 1889538048,
        "usedBytes": 204800,
        "inodesFree": 251265,
        "inodes": 256284
      },
      "userDefinedMetrics": null
    }],
    "network": {
      "time": "2016-12-05T20:21:25Z",
      "rxBytes": 65312,
      "rxErrors": 0,
      "txBytes": 80292,
      "txErrors": 0
    }
  }, {
    "podRef": {
      "name": "kube-dns-v20-swk2e",
      "namespace": "kube-system",
      "uid": "10805393-ae4e-11e6-a73e-7e02f1527ea0"
    },
    "startTime": "2016-12-03T11:26:06Z",
    "containers": [{
      "name": "healthz",
      "startTime": "2016-12-03T11:26:07Z",
      "cpu": {
        "time": "2016-12-05T20:21:33Z",
        "usageNanoCores": 1824431,
        "usageCoreNanoSeconds": 56703859747
      },
      "memory": {
        "time": "2016-12-05T20:21:33Z",
        "availableBytes": 47206400,
        "usageBytes": 9707520,
        "workingSetBytes": 5222400,
        "rssBytes": 2871296,
        "pageFaults": 3842239,
        "majorPageFaults": 64
      },
      "rootfs": {
        "availableBytes": 12500975616,
        "capacityBytes": 19195224064,
        "usedBytes": 32768,
        "inodesFree": 2263952,
        "inodes": 2436448
      },
      "logs": {
        "availableBytes": 1631391744,
        "capacityBytes": 1889538048,
        "usedBytes": 20480,
        "inodesFree": 251265,
        "inodes": 256284
      },
      "userDefinedMetrics": null
    }, {
      "name": "kubedns",
      "startTime": "2016-12-03T11:26:07Z",
      "cpu": {
        "time": "2016-12-05T20:21:44Z",
        "usageNanoCores": 785823,
        "usageCoreNanoSeconds": 27353324050
      },
      "memory": {
        "time": "2016-12-05T20:21:44Z",
        "availableBytes": 160079872,
        "usageBytes": 34873344,
        "workingSetBytes": 18178048,
        "rssBytes": 9228288,
        "pageFaults": 3867,
        "majorPageFaults": 239
      },
      "rootfs": {
        "availableBytes": 12500975616,
        "capacityBytes": 19195224064,
        "usedBytes": 32768,
        "inodesFree": 2263952,
        "inodes": 2436448
      },
      "logs": {
        "availableBytes": 1631391744,
        "capacityBytes": 1889538048,
        "usedBytes": 28672,
        "inodesFree": 251265,
        "inodes": 256284
      },
      "userDefinedMetrics": null
    }, {
      "name": "dnsmasq",
      "startTime": "2016-12-03T11:26:07Z",
      "cpu": {
        "time": "2016-12-05T20:21:44Z",
        "usageNanoCores": 91781,
        "usageCoreNanoSeconds": 2882618232
      },
      "memory": {
        "time": "2016-12-05T20:21:44Z",
        "usageBytes": 929792,
        "workingSetBytes": 516096,
        "rssBytes": 180224,
        "pageFaults": 203,
        "majorPageFaults": 6
      },
      "rootfs": {
        "availableBytes": 12500975616,
        "capacityBytes": 19195224064,
        "usedBytes": 36864,
        "inodesFree": 2263952,
        "inodes": 2436448
      },
      "logs": {
        "availableBytes": 1631391744,
        "capacityBytes": 1889538048,
        "usedBytes": 20480,
        "inodesFree": 251265,
        "inodes": 256284
      },
      "userDefinedMetrics": null
    }],
    "network": {
      "time": "2016-12-05T20:21:44Z",
      "rxBytes": 24419477,
      "rxErrors": 0,
      "txBytes": 7749653,
      "txErrors": 0
    }
  }, {
    "podRef": {
      "name": "nodeloadtestv2-354078005-kq3uw",
      "namespace": "default",
      "uid": "b18143fd-bb25-11e6-bc81-4e38fb9816c5"
    },
    "startTime": "2016-12-05T20:02:05Z",
    "containers": [{
      "name": "nodeloadtestv2",
      "startTime": "2016-12-05T20:02:05Z",
      "cpu": {
        "time": "2016-12-05T20:21:37Z",
        "usageNanoCores": 2243720,
        "usageCoreNanoSeconds": 3656831863
      },
      "memory": {
        "time": "2016-12-05T20:21:37Z",
        "availableBytes": 156385280,
        "usageBytes": 53329920,
        "workingSetBytes": 53329920,
        "rssBytes": 53239808,
        "pageFaults": 51927,
        "majorPageFaults": 4
      },
      "rootfs": {
        "availableBytes": 12500975616,
        "capacityBytes": 19195224064,
        "usedBytes": 28672,
        "inodesFree": 2263952,
        "inodes": 2436448
      },
      "logs": {
        "availableBytes": 1631391744,
        "capacityBytes": 1889538048,
        "usedBytes": 204800,
        "inodesFree": 251265,
        "inodes": 256284
      },
      "userDefinedMetrics": null
    }],
    "network": {
      "time": "2016-12-05T20:21:46Z",
      "rxBytes": 67626,
      "rxErrors": 0,
      "txBytes": 82816,
      "txErrors": 0
    }
  }, {
    "podRef": {
      "name": "nodeloadtestv2-354078005-58guc",
      "namespace": "default",
      "uid": "1224c34e-b71e-11e6-aaf1-e20e3cb14eb6"
    },
    "startTime": "2016-12-03T11:26:06Z",
    "containers": [{
      "name": "nodeloadtestv2",
      "startTime": "2016-12-03T11:26:06Z",
      "cpu": {
        "time": "2016-12-05T20:21:47Z",
        "usageNanoCores": 1986232,
        "usageCoreNanoSeconds": 189427253879
      },
      "memory": {
        "time": "2016-12-05T20:21:47Z",
        "availableBytes": 142643200,
        "usageBytes": 72908800,
        "workingSetBytes": 67072000,
        "rssBytes": 52424704,
        "pageFaults": 632338,
        "majorPageFaults": 70
      },
      "rootfs": {
        "availableBytes": 12500975616,
        "capacityBytes": 19195224064,
        "usedBytes": 28672,
        "inodesFree": 2263952,
        "inodes": 2436448
      },
      "logs": {
        "availableBytes": 1631391744,
        "capacityBytes": 1889538048,
        "usedBytes": 4444160,
        "inodesFree": 251265,
        "inodes": 256284
      },
      "userDefinedMetrics": null
    }],
    "network": {
      "time": "2016-12-05T20:21:42Z",
      "rxBytes": 3242139,
      "rxErrors": 0,
      "txBytes": 4029355,
      "txErrors": 0
    }
  }, {
    "podRef": {
      "name": "nodeloadtestv2-354078005-5aayo",
      "namespace": "default",
      "uid": "b1815101-bb25-11e6-bc81-4e38fb9816c5"
    },
    "startTime": "2016-12-05T20:02:05Z",
    "containers": [{
      "name": "nodeloadtestv2",
      "startTime": "2016-12-05T20:02:05Z",
      "cpu": {
        "time": "2016-12-05T20:21:41Z",
        "usageNanoCores": 1928710,
        "usageCoreNanoSeconds": 3588360108
      },
      "memory": {
        "time": "2016-12-05T20:21:41Z",
        "availableBytes": 151498752,
        "usageBytes": 58216448,
        "workingSetBytes": 58216448,
        "rssBytes": 58138624,
        "pageFaults": 51243,
        "majorPageFaults": 4
      },
      "rootfs": {
        "availableBytes": 12500975616,
        "capacityBytes": 19195224064,
        "usedBytes": 28672,
        "inodesFree": 2263952,
        "inodes": 2436448
      },
      "logs": {
        "availableBytes": 1631391744,
        "capacityBytes": 1889538048,
        "usedBytes": 204800,
        "inodesFree": 251265,
        "inodes": 256284
      },
      "userDefinedMetrics": null
    }],
    "network": {
      "time": "2016-12-05T20:21:44Z",
      "rxBytes": 68768,
      "rxErrors": 0,
      "txBytes": 84054,
      "txErrors": 0
    }
  }, {
    "podRef": {
      "name": "kubernetes-dashboard-x1ue1",
      "namespace": "kube-system",
      "uid": "107bbbfd-ae4e-11e6-a73e-7e02f1527ea0"
    },
    "startTime": "2016-12-03T11:26:05Z",
    "containers": [{
      "name": "kubernetes-dashboard",
      "startTime": "2016-12-03T11:26:06Z",
      "cpu": {
        "time": "2016-12-05T20:21:45Z",
        "usageNanoCores": 58295,
        "usageCoreNanoSeconds": 6853179818
      },
      "memory": {
        "time": "2016-12-05T20:21:45Z",
        "usageBytes": 40898560,
        "workingSetBytes": 27377664,
        "rssBytes": 18862080,
        "pageFaults": 8185,
        "majorPageFaults": 212
      },
      "rootfs": {
        "availableBytes": 12500975616,
        "capacityBytes": 19195224064,
        "usedBytes": 32768,
        "inodesFree": 2263952,
        "inodes": 2436448
      },
      "logs": {
        "availableBytes": 1631391744,
        "capacityBytes": 1889538048,
        "usedBytes": 131072,
        "inodesFree": 251265,
        "inodes": 256284
      },
      "userDefinedMetrics": null
    }],
    "network": {
      "time": "2016-12-05T20:21:48Z",
      "rxBytes": 5887057,
      "rxErrors": 0,
      "txBytes": 3752932,
      "txErrors": 0
    }
  }]
}
