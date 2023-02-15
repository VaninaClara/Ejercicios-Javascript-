let newP = document.createElement ('p');
selectDivs = document.querySelectorAll ('div');
newP.innerText = 'Voy en medio!';

document.body.insertBefore (newP, selectDivs[1]);
















// Basandote en el siguiente html,inserta una p con el texto 'Voy en medio!' 
// entre los dos div. 
// Recuerda que no solo puedes insertar elementos con .appendChild.