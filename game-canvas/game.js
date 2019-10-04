// 1.Modify Settings:

// ctx.font = '30px Arial';                //Font used.
// ctx.fillStyle = 'red';                  //Color of text and forms.
// ctx.globalAlpha = 0.5;                  //Transaparancy.  0 = invisible & 1 = visible.

// 2. Draw Something:

// ctx.fillText('Hello', 50, 50);          //Write text and give coordinates of text. (x,y).
// ctx.fillRect(50, 50, 100, 100);         //Draw rectangle (startX, starty, width, height).
// ctx.clearRect(75, 75, 100, 100);        //Clear canvas (startX, starty, width, height).

var ctx = document.getElementById("ctx").getContext("2d");
ctx.font = '30px Arial'; 
const height = 500;
const width = 500;

var message = 'Bouncing';

var player = {
    x: 50,
    y: 40,
    spdX: 30,
    spdY: 5,
    name: 'P'
}

var enemyList = {};

var enemy = {
    x: 150,
    y: 350,
    spdX: 10,
    spdY: 15,
    name: 'E',
    id: 'E1'
};
enemyList['E1'] = enemy

var enemy2 = {
    x: 250,
    y: 350,
    spdX: 10,
    spdY: -15,
    name: 'E',
    id: 'E2'
};
enemyList['E2'] = enemy2

setInterval(update, 40); //(name of function, time period in ms);

function updateEntity (something) {
    //enemy or player:
    something.x += something.spdX;
    something.y += something.spdY;
    ctx.fillText(something.name,something.x,something.y)

    if (something.x < 0 || something.x > width) {
        console.log(message);
        something.spdX = -something.spdX;
    }

    if (something.y < 0 || something.y > height) {
        console.log(message);
        something.spdY = -something.spdY;
    }
}

function update() {
    ctx.clearRect(0, 0, width, height); //remove the letter after it moves so it doens't leave trail.

    for (var key in enemyList) {
        updateEntity(enemyList[key]);
    }

    updateEntity(player);
}





