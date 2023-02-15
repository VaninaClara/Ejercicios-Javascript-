const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let createUl = document.createElement('ul');

for (const app of apps) {
    let createLi = document.createElement('li');
    createLi.innerText = app;
    createUl.appendChild(createLi);
}

document.body.appendChild(createUl);










// Basandote en el siguiente array crea una lista 
// ul > li con los textos del array y metelo en el html.
/*
```js
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
```
*/