var images = ["images/pic2.jpg", "images/pic3.jpg", "images/pic4.png"];
var caption = ["Music24/7", "AuditLog", "MusicBot"];

var imageNumber = 0;
var imageLength = images.length - 1;

function changeImage(x) {
    imageNumber += x;
    if (imageNumber > imageLength) {
        imageNumber = 0;
    }
    if (imageNumber < 0) {
        imageNumber = imageLength;
    }

    document.getElementById("slideshow").src = images[imageNumber];
    document.getElementById("caption").innerHTML = caption[imageNumber];

    return false
}

function autoRun() {
    setInterval("changeImage(1)", 5000); 
}