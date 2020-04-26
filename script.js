const canvas = document.querySelector("canvas");
const openbtn = document.querySelector(".btn_open");
const resetbtn = document.querySelector(".btn_reset");
const savebtn = document.querySelector(".btn_save");

let CANVAS_HEIGHT;
let CANVAS_WIDTH;

ctx = canvas.getContext("2d");

function drawImage(image) {
    image.height = canvas.offsetWidth / image.width;
    image.width = canvas.offsetWidth
    if (image.height > canvas.offsetHeight) {
        image.width *= canvas.offsetHeight / image.height;
        image.height = canvas.offsetHeight;
    }
    return (ctx.drawImage(image, 0, 0, image.width, image.height));
}

function handleSavebtn(event) {
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "";
    link.click()
}

function handleResetbtn(event) {
    console.log("it is reset");
}

// function openFile(file){
//     const reader = new FileReader();
//     reader.onload = function (evt) {
//         console.log(evt.target.result);
//     };
//     reader.readAsDataURL(file);
// }

let file_reader = new FileReader();
console.log(file_reader);

function handleOpenbtn(event) {
    // let file = input.files[0];
    // let reader = new FileReader();
    // reader.readAsDataURL(file)
    // reader.onload = function() {
    //     console.log(reader.result);
    // }
    // reader.onerror = function() {
    //     console.log(reader.error);
    // }

    console.log("it is open");
    openFile(event);
}

function handleContextMenu(event) {
    event.preventDefault();
}


if (canvas) {
    canvas.addEventListener("contextmenu", handleContextMenu);
}

if (savebtn) {
    savebtn.addEventListener("click", handleSavebtn);
}

if (openbtn) {
    openbtn.addEventListener("click", handleOpenbtn);
}

if (resetbtn) {
    resetbtn.addEventListener("click", handleResetbtn);
}


function init() {

}

init();