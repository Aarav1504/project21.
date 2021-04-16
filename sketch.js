var canvas;
var music;
var surface1, surface2, surface3, surface4;
var box;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    box = createSprite(random(20, 750), 100, 40, 40);
    box.shapeColor = "white";
    box.velocityX = 4
    box.velocityY = 9

    surface1 = createSprite(0, 580, 360, 30);
    surface1.shapeColor = "blue"

    surface2 = createSprite(295, 580, 360, 30);
    surface2.shapeColor = "red"

    surface3 = createSprite(515, 580, 360, 30);
    surface3.shapeColor = "green"

    surface4 = createSprite(740, 580, 360, 30);
    surface4.shapeColor = "yellow"

}

function draw() {
    background(rgb(169,169,169));
    edges = createEdgeSprites();
    box.bounceOff(edges);
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = "blue";
        music.play();
    }

    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = "blue";
        music.play();
    }

    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor = "red";
        box.velocityX = 0
        box.velocityY = 0

        music.stop();
    }

    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor = "green";
        music.play();
    }

    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor = "yellow";
        music.play();
    }


    //add condition to check if box touching surface and make it box
    drawSprites();
}
