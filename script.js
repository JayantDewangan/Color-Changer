const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button');

buttons.forEach((x) => {
    x.addEventListener('click', (y) => {
        if(y.target.id === 'box-1'){
            body.style.backgroundColor = 'grey';
        }
        else if(y.target.id === 'box-2'){
            body.style.backgroundColor = 'white';
        }
        else if(y.target.id === 'box-3'){
            body.style.backgroundColor = 'blue';
        }
        else if(y.target.id === 'box-4'){
            body.style.backgroundColor = 'yellow';
        }
        else if(y.target.id === 'box-5'){
            body.style.backgroundColor = 'orange';
        }
        else if(y.target.id === 'box-6'){
            body.style.backgroundColor = 'purple';
        }
        else if(y.target.id === 'box-7'){
            body.style.backgroundColor = 'green';
        }
        else if(y.target.id === 'box-8'){
            body.style.backgroundColor = 'brown';
        }
    })
})
