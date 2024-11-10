const container = document.querySelector('#container');

for (i=1; i<273; i++) {
    let div = document.createElement('div');
    container.appendChild(div);
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

