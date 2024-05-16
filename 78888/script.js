function zoomIn() {
    var img = document.getElementById('image');
    var currentWidth = img.clientWidth;
    var currentHeight = img.clientHeight;
    img.style.width = (currentWidth * 1.2) + "px"; 
    img.style.height = (currentHeight * 1.2) + "px";
}

function zoomOut() {
    var img = document.getElementById('image');
    var currentWidth = img.clientWidth;
    var currentHeight = img.clientHeight;
    img.style.width = (currentWidth * 0.8) + "px"; 
    img.style.height = (currentHeight * 0.8) + "px"; 
}