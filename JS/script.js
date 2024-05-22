const arrow = document.getElementById("arrow")
const SDrop = document.getElementById("socialDrop")
const nav = document.getElementById("navigation")
const con = document.getElementById("connect")
const back = document.getElementById("backBlur")
const qr = document.getElementById("qrcode")
var Arrowclicked = true

function socialClick()
{
    Arrowclicked = !Arrowclicked
    if (Arrowclicked)
    {
        arrow.style.transform = "rotate(90deg)"
        SDrop.style.display = "none"
    }
    if (!Arrowclicked)
    {
         arrow.style.transform = "rotate(270deg)"
         SDrop.style.display = "flex"
    }
}

function LoginClick()
{
    back.style.backgroundColor = "hsla(0, 0%, 0%, 0.500)"
    back.style.backdropFilter = "blur(10px)"
    qr.style.display = "block"
}

function qrXClick()
{
    back.style.backgroundColor = "hsla(0, 0%, 0%, 0)"
    back.style.backdropFilter = "blur(0px)"
    qr.style.display = "none"
}

setInterval(() => {
    SDrop.style.top = nav.clientHeight + "px"
    con.style.top = nav.clientHeight + "px"
}, 16);

// slider starts

let list = document.querySelector('#slider #list');
let items = document.querySelectorAll('#slider #list #item');
let dots = document.querySelectorAll('#slider #dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function() {
    if(active + 1 > lengthItems) {
        active = 0;
    }
    else {
        active = active + 1;
    }
    reloadslider();
}

prev.onclick = function() {
    if(active - 1 < 0) { 
        active = lengthItems;
    }
    else {
        active = active - 1;
    }
    reloadslider();
}

let refreshslider = setInterval(()=> {next.click()}, 5000);

function reloadslider() {
    let checkleft = items[active].offsetLeft;
    list.style.left = -checkleft + 'px';

    dots.forEach((dot, index) => {
        if (index === active) {
            dot.style.width = '20px';
        }
        else {
            dot.style.width = '10px';
        }
    })

    clearInterval(refreshslider);
    refreshslider = setInterval(()=> {next.click()}, 5000);
}

dots.forEach((li, key) => {
    li.addEventListener('click', function(){
        active = key;
        reloadslider(); 
    })
})

//slider ends