rightEyeX=0;
rightEyeY=0;
function preload(){
    glasses=loadImage("https://postimg.cc/sMpyM8NT");
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
image(video,0,0,300,300);
image(glasses, rightEyeX-15, rightEyeY-15, 40, 40);

}

function take_snapshot(){
    save("my_glasses_pic.png");}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}

 function gotPoses(results){
     if(results.length>0){
         console.log(results);

         rightEyeX=results[0].pose.rightEye.x;
         rightEyeY=results[0].pose.rightEye.y;
         console.log("rightEye x=");
         console.log("rightEye y=");
     }
 }