// const container = document.querySelector('.container');
const container = document.getElementsByClassName('container');




function defaultGrid() {
    makeRows(16);
    makeCols(16);
}


function makeRows(rowNum) {
    for(r = 0; r < rowNum; r++) {
        let row = document.createElement('div');
        container.appendChildElement(row).className = 'gridRow';
    }
}


function makeCols(cellNum) {
    for(i=0; i<rows.length; i++) {
        for(j=0; j<cellNum; j++) {
            let newCell = document.createElement('div');
            rows[j].appendChildElement(newCell).className = 'cell';
        }
    }
}


defaultGrid();
let rows = document.getElementsByClassName('gridRow');
let cells = document.getElementsByClassName('cell');
