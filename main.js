function setup()
{
    video = createCapture(VIDEO);
    video.size(500,500);
    video.position(0,200)

    canvas = createCanvas(550,500);
    canvas.position(500,200);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log("PoseNet Is Initialized");
}

function draw()
{
    background('#E74C3C');
    textSize(difference);
    text("Eric" , 10, 100);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + " rightWristX = " + rightWristX + " difference = " + difference);
    }

}