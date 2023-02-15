const baseUrl = 'https://api.nationalize.io?name=';

const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const name = input.value;
  fetch(`${baseUrl}${name}`)
    .then(response => response.json())
    .then(data => {
      const result = data.country.map(c => `${c.country_id}: ${c.probability}`).join(', ');
      const p = document.createElement('p');
      p.textContent = `El nombre ${name} tiene los siguientes porcentajes ${result}.`;
      document.body.appendChild(p);
    })
    .catch(error => console.error(error));
});