var alitrip = require('alitrip');
var _ = require('lodash');
var moment = require('moment');
var async = require('async');
var fs = require('fs');

var cities = ["CTU", "CAN"];

var getAll = function () {
    _.forEach(cities, function (dep) {
        _.forEach(cities, function (arr) {
            _.each(_.range(1, 30), function (i) {
                alitrip.getFlight(dep, arr, moment().add(i, 'days').format('YYYY-MM-DD'))
                    .then(function (data) {
                        if(data.ret[0] != 'SUCCESS::调用成功')
                        {
                            return;
                        }

                        console.log(data.ret, data.data.ow_flight.length);
                    });
            });
        });
    });
};

setInterval(getAll, 1000);