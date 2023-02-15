let selectClass = document.querySelectorAll('.fn-insert-here');

for (singleClass of selectClass) {
    let newP = document.createElement('p');
    newP.innerText = 'Voy dentro!';

    singleClass.appendChild(newP);
}