const canvas = document.querySelector("canvas");
const openbtn = document.querySelector(".btn_open");
const resetbtn = document.querySelector(".btn_reset");
const savebtn = document.querySelector(".btn_save");
const sepia_range = document.querySelector(".range__sepia")
const blur_range = document.querySelector(".range__blur")
const brightness_range = document.querySelector(".range__brightness")
const contrast_range = document.querySelector(".range__contrast")
const grayscale_range = document.querySelector(".range__grayscale")
const hue_range = document.querySelector(".range__hue")
const invert_range = document.querySelector(".range__invert")
const opacity_range = document.querySelector(".range__opacity")
const saturate_range = document.querySelector(".range__saturate")
const filter = document.getElementsByClassName("range_filter");

ctx = canvas.getContext("2d");

const CANVAS_SIZE = 800;
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;
// ctx.fillRect = (0,0,CANVAS_SIZE, CANVAS_SIZE);
// ctx.save();
// let saveFilter = false;


// function saveState() {
//     saveFilter = true;
// }


//이미지 그리기
function putcanvas(image) {
    image.height = canvas.offsetHeight;
    image.width = canvas.offsetWidth;
    // console.log(image.height, image.width);
    console.log(ctx.getImageData(0, 0, image.width, image.height));
    return (ctx.drawImage(image, 0, 0, image.width, image.height));
}

//TODO
//range 값 받기.
//range 값과 필터 값 받기.
//이렇게 하면 하드코딩같은데 더 효율적인 방법은 없을까?
//2종류 이상의 필터를 넣을 수 없는 것은 어떤 장치가 필요할까?
//여기에 붓처럼 부분 필터를 할 수 있지 않을까?

// function handleRangeChange(event){
//     const value = event.target.value;
//     canvas.style.filter = `${}(${value}px)`
// }
// function range_total(){
//     canvas.style.filter = range_blur()+range_sepia();
//     console.log(canvas.style.filter);
// }
//어떻게 밑의 필터된 값을 합칠 수 있지?
function range_blur(event) {
    blur_value = event.target.value;
    return (canvas.style.filter = `blur(${blur_value}px)`);
    // localStorage.getItem.apply
}
console.log(range_blur());
console.log(range_blur);
function range_brightness(event) {
    brightness_value = event.target.value;
    canvas.style.filter = `brightness(${brightness_value}%)`;
}

function range_contrast(event) {
    contrast_value = event.target.value
    canvas.style.filter = `contrast(${contrast_value}%)`;
}

function range_grayscale(event) {
    grayscale_value = event.target.value;
    canvas.style.filter = `grayscale(${grayscale_value}%)`;
}

function range_hue(event) {
    hue_value = event.target.value;
    canvas.style.filter = `hue-rotate(${hue_value}deg)`;
}

function range_invert(event) {
    invert_value = event.target.value;
    canvas.style.filter = `invert(${invert_value}%)`;
}

function range_opacity(event) {
    opacity_value = event.target.value;
    canvas.style.filter = `opacity(${opacity_value}%)`;
}

function range_saturate(event) {
    saturate_value = event.target.value;
    canvas.style.filter = `saturate(${saturate_value}%)`;
}

function range_sepia(event) {
    console.log(event.target.value);
    // image = new Image();
    // console.log(image);
    sepia_value = event.target.value;
    canvas.style.filter = `sepia(${sepia_value}%)`;
}


//파일 열기
function open(event) {
    let file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.onload = function (event) {
        let image = new Image();
        image.src = event.target.result;
        image.onload = function () {
            putcanvas(image);
        }
    }
    fileReader.readAsDataURL(file);
}

//저장 버튼
function handleSavebtn(event) {
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "flitering";
    link.click()
}


//reset
function handleResetbtn(event) {
    console.log("it is reset");
    canvas.style.filter = `none`;
}

// Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));

// function filterTotal(){
//     return range_blur() + range_brightness() + range_contrast() + range_grayscale() + range_hue() + range_invert() + range_opacity() + range_saturate() + range_sepia();
// }




//우클릭방지
function handleContextMenu(event) {
    return event.preventDefault();
}

//작동모음
function ifs() {
    // if (canvas) {
    //     canvas.addEventListener("contextmenu", handleContextMenu);
    // }

    // if (canvas) {
    //     canvas.addEventListener("input",saveState);
    // }

    // if(canvas.getContext){
    //     ctx.save();
    //     ctx.restore();
    // }

    if (openbtn) {
        openbtn.addEventListener("change", open)
    }

    if (savebtn) {
        savebtn.addEventListener("click", handleSavebtn);
    }

    if (resetbtn) {
        resetbtn.addEventListener("click", handleResetbtn);
    }
    if (range_blur) {
        blur_range.addEventListener("input", range_blur);
    }
    if (range_brightness) {
        brightness_range.addEventListener("input", range_brightness);
    }
    if (range_contrast) {
        contrast_range.addEventListener('input', range_contrast);
    }
    if (range_grayscale) {
        grayscale_range.addEventListener('input', range_grayscale);
    }
    if (range_hue) {
        hue_range.addEventListener('input', range_hue);
    }
    if (range_invert) {
        invert_range.addEventListener('input', range_invert);
    }
    if (range_opacity) {
        opacity_range.addEventListener('input', range_opacity);
    }
    if (range_saturate) {
        saturate_range.addEventListener('input', range_saturate);
    }
    if (range_sepia) {
        sepia_range.addEventListener('input', range_sepia);
    }
    if (resetbtn) {
        resetbtn.addEventListener("click",handleResetbtn);
    }
}
// function handleFilter(event){
    //     const filters = event.target.style.filter;
    //     ctx.fill = filters;
    // }
    
    // Array.from(filter).foreach(filters => filters.addEventListener("click",handleFilter));
// ctx.drawImage(canvas,CANVAS_SIZE,CANVAS_SIZE);
//함수모음
function init() {
    ifs();
    // range_total();    
    
}

init();