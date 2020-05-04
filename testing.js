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
const filters_range = document.getElementsByClassName("range_filter");

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

// function range(event){
//     blur_range = event.target.value;
//     canvas.style.filter = `blur(${blur_value}px)`
//     sepia_value = event.target.value;
//     canvas.style.filter = `sepia(${sepia_value}%)`;
// }

// function filters(){
//     function blur(){blur_val=event.target.value; canvas.style.cssText = `filter:"blur(${blur_val}px)`};
//     function sepia(){sepia_val = event.target.value; canvas.style.cssText = `filter:"sepia(${sepia_val}%)`};
//     return blur + sepia;
// };


// function filtersUpdate(){
    // canvas.style.filter = `blur(${range_blur}px) brightness(${range_brightness}%) contrast(${range_contrast}%) grayscale(${range_grayscale}%) hue-rotate(${range_hue}deg) invert(${range_invert}%) opacity(${range_opacity}) saturate(${range_saturate}%) sepia(${range_sepia}%)`;
    // canvas.style.filter = 		
        // "brightness(" +
		// brightness +
		// "%) contrast(" +
		// contrast +
		// "%) saturate(" +
		// saturate +
		// "%) grayscale(" +
		// grayscale +
		// "%) invert(" +
		// invert +
		// "%) hue-rotate(" +
		// huerotate +
        // "deg) 
        // "blur(" +
		// range_blur +
        // "px)";
        // opacity(" +
		// opacity +
		// "%) sepia(" +
		// sepia +
		// "%)";
    // canvas.style.filter = `blur(${range_blur()}px)`
    // console.log(range_blur.value);
    // console.log(canvas.style.filter);
// }
// console.log(filtersUpdate);
function range_blur() {
    // blur_value = event.target.value;
    canvas.style.filter = "blur(" + blur_value + "px) brightness(" + brightness_value + "%)";

    // function blurV(e){
    //     return console.log(blur_value = e.target.value);
    // }
    // blurV();
    // brightness_value = event.target.value;


    // canvas.style.filter = `blur(${blur_value}px)`
    // return (canvas.style.filter = `blur(${blur_value}px)`);
    // localStorage.getItem.apply
    // console.log(r_value(event));
    // console.log(brightness_value(event));
    // canvas.style.filter = `blur(${blur_value}px) brightness(${brightness_value}%)`
    // canvas.style.filter = "blur(" + blur_value + "px) brightness(" + brightness_value + "%)";
    //  contrast(${range_contrast}%) grayscale(${range_grayscale}%) hue-rotate(${range_hue}deg) invert(${range_invert}%) opacity(${range_opacity}) saturate(${range_saturate}%) sepia(${range_sepia}%)`
}

// blur_range.addEventListener('input',function(){
//     blur_value = range_blur.value;
//     console.log(range_blur.value);
//     // console.log(blur_value);
//     range_blur();
// })

// brightness_range.addEventListener('input',function(){
//     brightness_value = range_brightness.value;
//     console.log(brightness_value);
//     range_blur();
// })


// console.log(range_blur)
// console.log(r_blur);
// console.log(range_brightness);
// function r_blur(event) {
//     blur_value = event.target.value;
//     return r_blur;
// }

function range_brightness(event) {
    brightness_value = event.target.value;
    // canvas.style.filter = `brightness(${brightness_value}%)`;
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

    // return canvas.style.filter = `sepia(${sepia_value}%)`;
}

// function ranges(){
//     return console.log(range_blur() + range_sepia());
// }

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
    // console.log("it is reset");
    canvas.style.filter = `none`;
}

// Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));

// function filterTotal(){
//     return range_blur() + range_brightness() + range_contrast() + range_grayscale() + range_hue() + range_invert() + range_opacity() + range_saturate() + range_sepia();
// }

// function updateFilters() {
// 	imgture.style.filter =
// 		"brightness(" +
// 		brightness +
// 		"%) contrast(" +
// 		contrast +
// 		"%) saturate(" +
// 		saturate +
// 		"%) grayscale(" +
// 		grayscale +
// 		"%) invert(" +
// 		invert +
// 		"%) hue-rotate(" +
// 		huerotate +
// 		"deg) blur(" +
// 		blur +
// 		"px) opacity(" +
// 		opacity +
// 		"%) sepia(" +
// 		sepia +
// 		"%)";
// // }
// function filtersValue() {
//     // console.log(event.target.value);
//     console.log(sepia_range.value);


// }

// if(sepia_range){

// }

// function filtersUpdate() {
//     canvas.style.filter = `blur(${blur_range}px) sepia(${sepia_range}%)`;
//     // canvas.style.filter =`blur(${blur_value}px) sepia(${sepia_value}%)`;
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
    if(filters_range) {
        brightness_range.addEventListener("input", range_blur);
        blur_range.addEventListener("input", range_blur);
    }
    // if (range_blur) {
    //     blur_range.addEventListener("input", range_blur);
    // }
    // if (range_brightness) {
    //     brightness_range.addEventListener("input", range_brightness);
    // }
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
    // if(filters) {
    //     // filter.addEventListener('input',filters);
    //     filter.
    // }
    if (resetbtn) {
        resetbtn.addEventListener("click", handleResetbtn);
    }

    // if(filters){
    //     filtersUpdate.addEventListener("input",filtersUpdate);
    // }
    // if (){
    //     ctx.drawImage
    // }
}
// console.log(sepia_range.style.setProperty);

// function testing(){
//     let node = filter.lastChild;
//     filter.appendChild(node);
// }
// console.log()

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
    // updateFilter();
    // range();
    // testing();
    // filters();
    // console.log(filter);
    // console.log(range_sepia);
    // filtersUpdate();
    // filtersValue();
    // filtersUpdate();
}

init();