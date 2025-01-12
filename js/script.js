// selezioni elementi
const lamp = document.getElementById('image');

const button = document.getElementById('button');


// gestiamo il cambio immagine
button.addEventListener('click', function(){
    
    lamp.src = './img/yellow_lamp.png';
    button.className = 'on';
});