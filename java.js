const container = document.querySelector('#container');
const grid = document.querySelector('.grid');

for (i=1; i<273; i++) {
    let div = document.createElement('div');
    div.classList.add('grid');
    container.appendChild(div);
}

container.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'black';
});