noseX = 0
noseY = 0

diference = 0

rightWristX = 0
leftWristX = 0

function setup() {
    video = createCapture(VIDEO)
    canvas = createCanvas(550, 550);
    canvas.position(450, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('poseNet Is Initialized');
}

function gotPoses(results)
{
    console.log("oi")
    if(results.lenght > 0)
    {
        console.log("olá")
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}