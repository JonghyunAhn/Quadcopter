var arDrone = require('ar-drone');
var client = arDrone.createClient();
var path = require('path');
var async = require('async');
var fs = require('fs');

var pngCounter = 0;
var pngStream = client.getPngStream({frameRate:50});
var streamer = function(callback) {pngStream.on('data',function(data) {
    fs.writeFile('./tmp/pic'+pngCounter+'.png',data,'binary',function(err) {
        //console.log('Pic');
        if (err) {
            console.log(err);
        }
    pngCounter+=1;
    }); 
});};

var callback= function() {console.log('Dora the Explorer')};

var seriesFunction = function(callback) { async.series(
    [function (callback) {
        client.takeoff()
        console.log("IM FLYING!");
        callback();
    },
    function (callback) { 
        client.after(3000, function(){ 
            this.clockwise(0.5);
            console.log("We're moving, Roger that.");
        })
        callback();
    },
    
    function (callback) {
        client.after(3000, function() {
            this.land();
            console.log("We're ready for landing, Roger that, again...");
        });
        callback();
    }
    ],callback);
};

async.parallel([seriesFunction,streamer]);
