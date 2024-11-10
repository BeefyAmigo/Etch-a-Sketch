const container = document.querySelector('#container');

for (i=1; i<273; i++) {
    let row = document.createElement('div');
    row.classList.add('row')
    container.appendChild(row);
    div.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'black';
    });
}
function setGridSize() {
    let button = document.querySelector('button');
    button.addEventListener('click', () => {
         let userInput = prompt('Enter Custom Grid Size');
         console.log(userInput);
    })
    
}
setGridSize();

