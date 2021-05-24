noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCanvas(500, 500);
    canvas.position(560, 150);
    
    posenet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    background('#969A97');
    document.getElementById("square_side").innerHTML = "Width and Height of a square will be = "+difference+"px";
    fill('#F90093');
    stroke('#F90093');
    text('White', noseX, noseY, difference);

}
function modelLoaded() {
    console.log("Posenet Loaded");    
}
function gotPoses(result) {
    if (result.length > 0) {
        console.log(result);
        noseX=result[0].pose.nose.x;
        noseY=result[0].pose.nose.y;
        console.log("Nose X = "+noseX+"Nose Y "+noseY);
        leftWristX = result[0].pose.leftWrist.x;
    rightWristX = result[0].pose.rightWrist.x; 
    difference = floor(leftWristX-rightWristX);
    console.log("Left wristX = "+leftWristX+"rightWrist x = "+rightWristX+"difference = "+difference);
    
    }
}