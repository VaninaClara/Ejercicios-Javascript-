const userAnwsers = [];

function confirmExample(description){
    return confirm(description)
}

function promptExample(description){
    return propmt(description)
}

function father(description, callback){
   userAnwsers.push(callback(description));
}

const confirmValue = confirm('Soy un texto');
const propmt = prompt('Soy un texto');

father('¿Estás seguro de continuar?', confirmExample);
father('Ingresa tu nombre', promptExample);
father('¿Te gustaría guardar los cambios?', confirmExample);

console.log(userAnwsers);