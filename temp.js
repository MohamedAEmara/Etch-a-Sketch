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



// const element = document.getElementsByClassName("cell");

// const element = document.getElementById('cell').classList.add = 'selected';


function mouseHover() {
    const element = document.querySelector('div');

    // selected.addEventListener('click', changeColor);
    element.addEventListener('mouseover', changeColor);
    // element.addEventListener('click', function()  {
    //     const target = document.getElementsByClassName('selected');
    //     target.innerHTML = 'jj';
    // });
    
    
}

function changeColor(event) {
    event.target.style.backgroundColor = currColor;
    console.log('hi');
}

function getColor(event){
    currColor = event.target.className;
    // console.log(event.target);
    // console.log(event.target.className);
    // if(event.target.className == 'red'){
    //     console.log('red pressed');
    //     currColor = 'blue';
    // }
}

function changeCurrentColor()
{
    console.log('chaneCurrentColor');
    const blue = document.querySelector('.blue');
    const red = document.querySelector('.red');
    const yellow = document.querySelector('.yellow');
    const white = document.querySelector('.white');
    const cyan = document.querySelector('.cyan');
    // const color = document.querySelectorAll('button');
    red.addEventListener('click', getColor);
    yellow.addEventListener('click', getColor);
    blue.addEventListener('click', getColor);
    white.addEventListener('click', getColor);
    cyan.addEventListener('click', getColor);
    // red.addEventListener('click', getColor);
    // const color = document.addEventListener('click', change)
}



function buildButtons() {
    // var buttons = document.querySelector('.buttons');
    // let green_btn = document.createElement('button');
    // let red_btn = document.createElement('button');
    // let black_btn = document.createElement('button');
    // let cyan_btn = document.createElement('button');
    // let yellow_btn = document.createElement('button');
   
    // buttons.appendChild(green_btn);
    // buttons.appendChild(red_btn);
    // buttons.appendChild(black_btn);
    // buttons.appendChild(cyan_btn);
    // buttons.appendChild(yellow_btn);
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
buildButtons();
mouseHover();
changeCurrentColor();