// selezioni elementi
const lamp = document.getElementById('image');

const button = document.getElementById('button');


// gestiamo il cambio immagine
button.addEventListener('click', function(){
    const isOff = lamp.src.includes('white_lamp') && button.classList.contains('off');
    
    if(isOff){
        lamp.src = './img/yellow_lamp.png';
        button.className = 'on';
        button.innerHTML = 'SPEGNI';
    } else {
        lamp.src = './img/white_lamp.png';
        button.className = 'off';
        button.innerHTML = 'ACCENDI';
    }
});


