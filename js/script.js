// selezioni elementi
const lamp = document.getElementById('image');

const button = document.getElementById('button');


// gestiamo il cambio immagine con sintassi funzione estesa

// button.addEventListener('click', function(){
//     const isOff = lamp.src.includes('white_lamp') && button.classList.contains('off');
    
//     if(isOff){
//         lamp.src = './img/yellow_lamp.png';
//         button.className = 'on';
//         button.innerHTML = 'SPEGNI';
//     } else {
//         lamp.src = './img/white_lamp.png';
//         button.className = 'off';
//         button.innerHTML = 'ACCENDI';
//     }
// });



// con arrow function

// button.addEventListener('click', () =>{
//     const isOff = lamp.src.includes('white_lamp') && button.classList.contains('off');
    
//     if(isOff){
//         lamp.src = './img/yellow_lamp.png';
//         button.className = 'on';
//         button.innerHTML = 'SPEGNI';
//     } else {
//         lamp.src = './img/white_lamp.png';
//         button.className = 'off';
//         button.innerHTML = 'ACCENDI';
//     }
// });



//con arrow function e metodo toogle

button.addEventListener('click', () => {
    
    button.classList.toggle('on');

    if (button.classList.contains('on')) {
        lamp.src = './img/yellow_lamp.png';
        button.innerHTML = 'SPEGNI';
    } else {
        lamp.src = './img/white_lamp.png';
        button.innerHTML = 'ACCENDI';
    }
});