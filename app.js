const container = document.getElementById('container');
const colors = ['#00ff00','#00e500','#00cc00','#00b200','#009900','#007f00','#006600','#004c00','#003300'];
const squares = 1500;

for(let i=0; i<squares; i++){
    const square = document.createElement('div');
    square.classList.add('square')

    container.appendChild(square)
    
    square.addEventListener('mouseover',()=> setColor(square))
    square.addEventListener('mouseout',()=> removeColor(square))
    
}

function setColor(element){
    const color = getRandomColor()
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color} , 0 0 10px ${color}`

    //console.log(color)
}

function removeColor(element){
    element.style.background = '#1d1d1d';
    element.style.boxShadow = "0 0 2px #000"
}

function getRandomColor(){
    return colors[Math.floor(Math.random()*colors.length)]
}