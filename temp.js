let currColor = 'black';

function buildGrid() {
    var container = document.getElementById("container");

    const rows = 16;
    const cols = 16;
    
    for(let i=0; i<rows; i++)
    {
        let list = document.createElement('div');
        
        for(let j=0; j<cols; j++)
        {
            let cell = document.createElement('div');
            list.appendChild(cell).className = 'gridRow';
            
        }
        container.appendChild(list).className = 'gridCol'
        console.log('new column added');
    }    
}



function mouseHover() {
    const element = document.querySelector('div');

    element.addEventListener('mouseover', changeColor);
    
}

function changeColor(event) {
    event.target.style.backgroundColor = currColor;
    console.log('hi');
}

function getColor(event){
    currColor = event.target.className;

}

function changeCurrentColor()
{
    console.log('chaneCurrentColor');
    const blue = document.querySelector('.blue');
    const red = document.querySelector('.red');
    const yellow = document.querySelector('.yellow');
    const white = document.querySelector('.white');
    const cyan = document.querySelector('.cyan');
    red.addEventListener('click', getColor);
    yellow.addEventListener('click', getColor);
    blue.addEventListener('click', getColor);
    white.addEventListener('click', getColor);
    cyan.addEventListener('click', getColor);

}



function changeButtonBackgrouns(event) {
    const btns = document.querySelectorAll('button');
    for(let i=0; i<btns.length; i++)
    {
        btns[i].style.backgroundColor = btns[i].className;
    }
}

buildGrid();
changeButtonBackgrouns();
mouseHover();
changeCurrentColor();