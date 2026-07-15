// Ashvale Online
// Movement + Woodcutting


const player = document.getElementById("player");

const trees = document.querySelectorAll(".tree");



let playerX = window.innerWidth / 2;

let playerY = window.innerHeight - 200;


let targetX = playerX;

let targetY = playerY;



const speed = 3;



let woodcuttingXP = 0;

let logs = 0;



player.style.left = playerX + "px";

player.style.top = playerY + "px";





// Click anywhere

document.addEventListener("click", function(event){


    targetX = event.clientX;

    targetY = event.clientY;


});





// Tree clicking


trees.forEach(tree => {


    tree.addEventListener("click", function(event){


        event.stopPropagation();



        let rect = tree.getBoundingClientRect();


        targetX = rect.left + 40;

        targetY = rect.top + 100;



        setTimeout(()=>{


            chopTree(tree);


        },1000);



    });



});





function chopTree(tree){



    tree.style.opacity = "0.4";


    logs++;

    woodcuttingXP += 25;



    console.log(

        "Logs:",

        logs,

        "XP:",

        woodcuttingXP

    );



    setTimeout(()=>{


        tree.style.opacity = "1";


    },5000);



}





function gameLoop(){



    let dx = targetX-playerX;

    let dy = targetY-playerY;



    let distance = Math.sqrt(

        dx*dx + dy*dy

    );




    if(distance > 2){



        playerX +=

        (dx/distance)*speed;



        playerY +=

        (dy/distance)*speed;



        player.style.left = playerX+"px";

        player.style.top = playerY+"px";



    }




    requestAnimationFrame(gameLoop);



}



gameLoop();
