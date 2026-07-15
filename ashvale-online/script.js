// Ashvale Online
// Player Movement System


const player = document.getElementById("player");


// Starting position

let playerX = window.innerWidth / 2;
let playerY = window.innerHeight - 200;


// Target position

let targetX = playerX;
let targetY = playerY;


// Movement speed

const speed = 3;



// Place player initially

player.style.left = playerX + "px";
player.style.top = playerY + "px";



// Click anywhere to move

document.addEventListener("click", function(event) {

    targetX = event.clientX;
    targetY = event.clientY;

});




// Game loop

function gameLoop(){


    // Calculate distance

    let dx = targetX - playerX;
    let dy = targetY - playerY;


    let distance = Math.sqrt(
        dx * dx + dy * dy
    );



    // Move if not close enough

    if(distance > 2){


        playerX += (dx / distance) * speed;

        playerY += (dy / distance) * speed;


        player.style.left = playerX + "px";

        player.style.top = playerY + "px";


    }



    requestAnimationFrame(gameLoop);

}



// Start game

gameLoop();
