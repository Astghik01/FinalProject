var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var messages = [];

app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000, function () {
    console.log("port is running")
});

// Aystex kapum enq classery
var Grass = require("./modul/Grass.js");
var Gishatich = require("./modul/gishatich.js");
var GrassEater = require("./modul/GrassEater.js");
var LivingCreature = require("./modul/LivingCreature.js");
var Sun = require("./modul/Sun.js");
var ZarmanaliKerpar = require("./modul/ZarmanaliKerpar.js");


// haytararum enq zangvacnery
grassArr = [];
grasseaterArr = [];
gishatichArr = [];
LivingCreatureArr = [];
SunArr = [];
ZarmanaliKerparArr = [];

// Matrix enq haytararum

var w = 50;
var h = 60;

function genMatrix(w, h) {
    var matrix = [];
    for (var y = 0; y < h; y++) {
        var r = Math.floor(Math.random() * 75);
        if (r < 20) r = 0;
        else if (r < 40) r = 1;
        else if (r < 42) r = 2;
        else if (r < 75) r = 3;
        matrix[y][x] = r;
    }
}
return matrix


matrix = genMatrix(w, h);
for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {
            grassArr.push(new Grass(x, y, 1));
            Grassinit++;
        }
        if (matrix[y][x] == 2) {
            matrix[y][x] = new GrassEater(x, y, 2);
            GrassEaterinit++;
        }
        if (matrix[y][x] == 3) {
            matrix[y][x] = new gishatich(x, y, 3);
            gishatichinit++;
        }
        if (matrix[y][x] == 4) {
            matrix[y][x] = new Sun(x, y, 4);
            Suninit;
        }
        if (matrix[y][x] == 5) {
            matrix[y][x] = new ZarmanaliKerpar(x, y, 5);
            ZarmanaliKerparinit++;
        }
    }
}

function drawserver() {
    for (var i in grassArr) {
        grassArr[i].mul();
    }

    for (var i in grasseaterArr) {
        grasseaterArr[i].move();
        grasseaterArr[i].mul();
        grasseaterArr[i].eat();
        grasseaterArr[i].die();
    }

    for (var i in gishatichArr) {
        gishatichArr[i].move();
        gishatichArr[i].mul();
        gishatichArr[i].eat();
        gishatichArr[i].die();
    }

    for (var i in SunArr) {
        SunArr[i].move();
        SunArr[i].mul();
        SunArr[i].eat();
        SunArr[i].die();
    }

    for (var i in ZarmanaliKerparArr) {
        ZarmanaliKerparArr[i].move();
        ZarmanaliKerparArr[i].mul();
        ZarmanaliKerparArr[i].eat();
        ZarmanaliKerparArr[i].die();
    }
}

function setup() {
    frameRate(5);
    createCnvas(20 * side, 20 * side);
    background('blue');
}



