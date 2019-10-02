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

//player:
var x = 50;
var y = 40;
var spdX = 30;
var spdY = 5;
var name = 'P'

//enemy:
var enemy_x = 50;
var enemy_y = 350;
var enemy_spdX = 30;
var enemy_spdY = 5;
var enemy_name = 'E'

var message = 'Bouncing';

ctx.fillText(name, x, y);

setInterval(update, 40); //(name of function, time period in ms);

function update() {
    //player:
    x += spdX;
    y += spdY;
    ctx.fillText(name,x,y)

    if (x < 0 || x > width) {
        console.log(message);
        spdX = -spdX;
    }

    if (y < 0 || y > height) {
        console.log(message);
        spdY = -spdY;
    }

      //enemy:
      enemy_x += enemy_spdX;
      enemy_y += enemy_spdY;
      ctx.fillText(enemy_name,enemy_x,enemy_y)
  
      if (enemy_x < 0 || enemy_x > width) {
          console.log(message);
          enemy_spdX = -enemy_spdX;
      }
  
      if (enemy_y < 0 || enemy_y > height) {
          console.log(message);
          enemy_spdY = -enemy_spdY;
      }
}





