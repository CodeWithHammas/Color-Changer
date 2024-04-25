let body = document.getElementsByTagName("body")[0]

function setColor(name) {
    body.style.backgroundColor = name;
}

function randomColor() {
    let red = Math.floor(Math.random() * 256); 
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256); 
    
    let color = `rgb(${red}, ${green}, ${blue})`; 
    
    document.body.style.backgroundColor = color; 
}

randomColor();
