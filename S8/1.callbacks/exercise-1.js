const numbersList = [];

function sum(a,b){
 return a + b;
}

function substract(a, b){
 return a - b;
}

function father(a, b, callback){
    numbersList.push(callback(a, b)); 
}

father(5, 2, sum);
father (20,10, substract);
father (90, 90, sum);

console.log(numbersList);