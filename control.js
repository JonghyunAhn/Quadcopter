var arDrone = require('ar-drone');
var client = arDrone.createClient();
var keypress = require('keypress');
var async = require('async');
var constants = require('./constants').Constants;

keypress(process.stdin);

process.stdin.on('keypress', function (ch,key) {
    if (key && key.name == 'up') {
        console.log('up');
        client.up(constants.speed);
        client.after(10, function() {
            this.stop();
        });
    }
    if (key && key.name == 'down') {
        console.log('down');
        client.down(constants.speed);
        client.after(10, function() {
            this.stop();
        });
    } 
    if (key && key.name == 'a') {
        console.log('left');
        client.left(constants.speed);
        client.after(10, function () {
            this.stop();
        });
    } 
    if (key && key.name == 'd') {
        console.log('right');
        client.right(constants.speed);        
        client.after(10, function () {
            this.stop();
        });
    } 
    if (key && key.name == 't') {
        //console.log('takeoff');
        client.takeoff();
    }
    if (key && key.name == 'l') {
        //console.log('land');
        client.land();
    } 
    if (key && key.name == 'left') {
        console.log('turnLeft');
        client.counterClockwise(constants.speed);        
        client.after(10, function () {
            this.stop();
        });
    }  
    if (key && key.name == 'right') {
        console.log('turnRight');
        client.clockwise(constants.speed);
        client.after(10, function () {
            this.stop();
        });
    }  
    if (key && key.name == 'w') {
        console.log('foward');
        client.front(constants.speed);
        client.after(10, function () {
            this.stop();
        });
    }    
    if (key && key.name == 's') {
        console.log('back');
        client.back(constants.speed);
        client.after(10, function () {
            this.stop();
        });
    } 
    if (key && key.name == 'c' && key.ctrl) {
        process.exit();
    }
});

process.stdin.setRawMode(true);
process.stdin.resume();

/*
window.onkeydown() =function(e) {
    var key = e.keyCode ? e.keyCode : e.which
    switch (key) {
        case constants.up:
            console.log('Up');
        case constants.down:
            console.log('Down');
        case constants.left:
            console.log('Left');
        case constants.right:
            console.log('Right');
        case constants.takeoff:
            console.log('takeoff');
        case constants.land:
            console.log('land');
    }
}
*/


//var videoStream = client.getVideoStream();
