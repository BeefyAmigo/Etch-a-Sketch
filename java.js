const container = document.querySelector('#container');

for (i=1; i<273; i++) {
    let div = document.createElement('div');
    container.appendChild(div);
    div.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'black';
    });
}

