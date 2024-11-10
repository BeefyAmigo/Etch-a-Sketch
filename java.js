function createGrid(userInput) {
    let screen = document.querySelector('.sketch-screen');
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
//function setGridSize() {
    //let button = document.querySelector('button');
    //button.addEventListener('click', () => {
         //let userInput = prompt('Enter Custom Grid Size');
         //createGrid(userInput);
    //})
    
//}
createGrid(16);

