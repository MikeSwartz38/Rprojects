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

var enemy = {
    x: 50,
    y: 350,
    spdX: 30,
    spdY: 5,
    name: 'E'
};

setInterval(update, 40); //(name of function, time period in ms);

function updatePlayer () {
    //player:
    player.x += player.spdX;
    player.y += player.spdY;
    ctx.fillText(player.name,player.x,player.y)

    if (player.x < 0 || player.x > width) {
        console.log(message);
        player.spdX = -player.spdX;
    }

    if (player.y < 0 || player.y > height) {
        console.log(message);
        player.spdY = -player.spdY;
    }
}

function updateEnemy () {
     //enemy:
     enemy.x += enemy.spdX;
     enemy.y += enemy.spdY;
     ctx.fillText(enemy.name,enemy.x,enemy.y)
 
     if (enemy.x < 0 || enemy.x > width) {
         console.log(message);
         enemy.spdX = -enemy.spdX;
     }
 
     if (enemy.y < 0 || enemy.y > height) {
         console.log(message);
         enemy.spdY = -enemy.spdY;
     }
}

function update() {
    updatePlayer();
    updateEnemy();
}





