const btn = document.getElementById("set");
const background = document.getElementById("background");
const width = document.getElementById("width");
const height = document.getElementById("height");
const modify = document.getElementById("modify");

// background.addEventListener('change', function(event) {
//     console.log(event.target.value);

// })

const elements = document.getElementsByName("cssProperties");

const set = () => {
    elements.forEach(element => {
        let cssAttribute = element.getAttribute('id');
        let cssValue = element.value;

        console.log(cssAttribute, cssValue);  
    
        modify.style[cssAttribute] = cssValue;
    })
}

btn.addEventListener('click', set);


// let color;
// let getWidth;
// let getHeight;

// background.addEventListener('change', function(event) {
//     color = event.target.value;
// })

// width.addEventListener('change', function(event) {
//     getWidth = event.target.value;
// })

// height.addEventListener('change', function(event) {
//     getHeight = event.target.value;
// })

// set.addEventListener('click', function() {
//     modify.style.backgroundColor = color;
//     modify.style.width = getWidth;
//     modify.style.height = getHeight;
// })