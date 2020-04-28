const fileInput = document.querySelector('input[type="file"]');
const fileRange = document.querySelector(".range__sepia");
const preview = document.querySelector(".preview");
const savebtn = document.querySelector(".btn_save");
const reader = new FileReader();

// console.log(addEventListener);
function handleRangeChange(event){
    console.log(event.target.value);
    image = new Image();
    console.log(image);
    
}

// if(fileRange){
//     fileRange.addEventListener("input",handleRangeChange);
// }

function handleEvent(event) {
    // eventLog.textContent = eventLog.textContent + `${event.type}: ${event.loaded} bytes transferred\n`;

    if (event.type === "load") {
        preview.src = reader.result;
    }
}

function handleSavebtn(event) {
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "";
    link.click()
}

function addListeners() {
    reader.addEventListener('loadstart', handleEvent);
    reader.addEventListener('load', handleEvent);
    reader.addEventListener('loadend', handleEvent);
    reader.addEventListener('progress', handleEvent);
    reader.addEventListener('error', handleEvent);
    reader.addEventListener('abort', handleEvent);
    fileRange.addEventListener('input', handleRangeChange);
}


function open(event) {
    // eventLog.textContent = '';
    const file = event.target.files[0];
    if(file){
        addListeners(reader);
        reader.readAsDataURL(file);
    }
    // fileReader.load = function(event) {
    //     let image = new Image();
    //     image.src = event.target.result;
    //     image.load;
    // }
    // fileReader.readAsDataURL(file);
}


fileInput.addEventListener("change",open)

function handleContextMenu(event) {
    event.preventDefault();
}


if (preview) {
    preview.addEventListener("contextmenu", handleContextMenu);
}

if (savebtn) {
    savebtn.addEventListener("click", handleSavebtn);
}
