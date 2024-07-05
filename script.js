// window.alert("WEBPAGE LOADED. SELF DESTRUCT MECHANISM WILL BEGIN IN PRECISELY 5 MINUTES");

let posA = [];


function preload(){
    // img=loadImage('image.png');
}

// let dropPos = {
//     xPos:0,
//     yPos:0,
// }
function setup(){
    createCanvas(500,300);
    for(let i = 0 ; i < 169 ; i++){
        posA.push({xPos:random(0,500),yPos:random(-450,-5)});
    }

}

function draw(){
    background(255,255,255);
    for(let i = 0 ; i <posA.length ; i ++){
        fill(255, 250, 115);
        ellipse(posA[i].xPos,posA[i].yPos,10);
        posA[i].yPos+=40;
        if(posA[i].yPos>500){
            posA[i].yPos=random(-15,10);
            posA[i].xPos=random(0,500);
        }
    }
}

 
    // background(145,7,132);
    // image(img,xPos,yPos,100,85);
    // xPos+=xSpeed;
    // yPos+=ySpeed;
    // if(xPos>500-100 || xPos<0){
    //     xSpeed=xSpeed*-1;
    // }
    // if(yPos>300-85 || yPos<0){
    //     ySpeed=ySpeed*-1;
    // }



// DO NOT TOUCH!!! THSI9 IS A SEPARATEROR!!!!!!!!

// background(220);

    // fill(160,82,45);
    // circle(width/2,height/2,40);

    // fill(160,82,45);
    // circle((width/2)-40,height/2,40);


    // fill(160,82,45);
    // rect((width/2)-40,(height/2)-5,40,-100)

    // fill(60,179,113);
    // triangle(20,20,20,20,20);