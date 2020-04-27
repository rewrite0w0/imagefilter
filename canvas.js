const canvas = document.querySelector("canvas");
const button = document.querySelector(".btn_open");
const WIDTH = canvas.width;
const HEIGHT = canvas.height;
const ctx = canvas.getContext("2d");

function drawImageData(image) {
    image.height *= canvas.offsetWidth / image.width;
    image.width = canvas.offsetWidth;

    if(image.height > canvas.offsetHeight){
        image.width *= canvas.offsetHeight / image.height;
        image.height = canvas.offsetHeight;
    }

    ctx.drawImage(image, 0, 0, image.width, image.height);
}

function open(event){
    let file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.onload = function(event) {
        let image = new Image();
        image.src = event.target.result;
        image.onload = function(){
            drawImageData(image);
        }
    }
    fileReader.readAsDataURL(file);
}

button.addEventListener("change",open);