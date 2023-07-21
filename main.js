status = "";

function setup()
{
    canvas = createCanvas(640, 300);
    canvas.position(370, 320);

    video = createCapture(VIDEO);
    video.hide();
}

function start()
{
    detectorObject = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detectando Objeto";
    text = document.getElementById("input").value;
    console.log("Objeto Procurado: " + text);
}

function modelLoaded()
{
    console.log("Modelo COCOSSD Carrregado");
    status = true;
}

function draw()
{
    image(video, 0, 0, 640, 420);
}