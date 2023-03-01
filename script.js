var container = document.getElementById("container");

const cols = 16;
const rows = 16;

for(let i=0; i<rows; i++)
{
    let liss = [1, 2, 3, 4];
    let list = document.getElementById('haha');
    for(let j=0; j<cols; j++)
    {
        // break;
        let cell = document.createElement('div').classList = 'cell';
        list.appendChild(cell);
    }
    container.appendChild(liss);
}
var cell = document.createElement("div");
cell.innerHTML = "Hello";
container.appendChild(cell);