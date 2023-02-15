//Usa un for para remplazar todas las comidas que no sean veganas con las comidas del array de frutas.
// Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Salad", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

let counter = 0;
for (const [i, food] of foodSchedule.entries()) {
  if (!food.isVegan) {
    foodSchedule[i].name = fruits[counter];
    counter++;
    if(counter >= fruits.length) {
      counter = 0;
    }
  }
}
console.log(foodSchedule);
