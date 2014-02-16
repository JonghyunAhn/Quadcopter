var arDrone = require('ar-drone');
var client = arDrone.createClient();
var keypress = require('keypress');
var async = require('async');
var constants = require('./constants').Constants;
var fs = require('fs');
var http = require('http');
var droneStream = require('dronestream');
var requestHandler = require('./requestHandler').requestHandler;

var server = http.createServer(requestHandler).listen(constants.port, function() {
    console.log('Server started');   
});
droneStream.listen(server);


keypress(process.stdin);

process.stdin.on('keypress', function (ch,key) {
    if (key && key.name == 'up') {
        console.log('up');
        client.up(constants.speed);
        client.after(15, function() {
            this.stop();
        });
    }
    if (key && key.name == 'down') {
        console.log('down');
        client.down(constants.speed);
        client.after(15, function() {
            this.stop();
        });
    } 
    if (key && key.name == 'a') {
        console.log('left');
        client.left(constants.speed);
        client.after(15, function () {
            this.stop();
        });
    } 
    if (key && key.name == 'd') {
        console.log('right');
        client.right(constants.speed);        
        client.after(15, function () {
            this.stop();
        });
    } 
    if (key && key.name == 't') {
        console.log('takeoff');
        client.takeoff();
    }
    if (key && key.name == 'l') {
        console.log('land');
        client.land();
    } 
    if (key && key.name == 'left') {
        console.log('turnLeft');
        client.counterClockwise(constants.speed);        
        client.after(15,function () {
            this.stop();
        });
    }  
    if (key && key.name == 'right') {
        console.log('turnRight');
        client.clockwise(constants.speed);
        client.after(15, function () {
            this.stop();
        });
    }  
    if (key && key.name == 'w') {
        console.log('foward');
        client.front(constants.speed);
        client.after(15, function () {
            this.stop();
        });
    }    
    if (key && key.name == 's') {
        console.log('back');
        client.back(constants.speed);
        client.after(15, function () {
            this.stop();
        });
    } 
    if (key && key.name == 'c' && key.ctrl) {
        process.exit();
    }
});

process.stdin.setRawMode(true);
process.stdin.resume();
