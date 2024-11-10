const button = document.querySelector('button');
const sketch = document.querySelector('.sketch-container');

function createGrid(userInput) {
    let screen = document.createElement('div');
    screen.classList.add('sketch-screen');
    sketch.appendChild(screen);

    
    for (i = 0; i < userInput; i++) {
    
        let col = document.createElement('div');
        col.classList.add('column');

        for(j = 0; j < userInput; j++) {

            let row = document.createElement('div');
            row.classList.add('row');
            row.style.border = '2px solid black';
            //row.innerText = (i * userInput) + j;
            col.appendChild(row);
            row.addEventListener('mouseover', () => {
                row.style.backgroundColor = 'black';
            })
        }
        screen.appendChild(col);
        
    }
}

button.addEventListener('click', () => {
    let userInput = prompt('Enter Custom Grid Size min:1 max:100');
    if(userInput < 101 && userInput > 0){
        let screen = document.querySelector('.sketch-screen')
        screen.parentNode.removeChild(screen);
        createGrid(userInput);
    }
    else {
        alert('Please use a number from 1-100');
    }
    
})
createGrid(16);


