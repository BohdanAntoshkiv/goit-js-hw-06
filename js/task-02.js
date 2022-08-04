// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.


const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = (list) => {
  return list.map((ingredient) => {
    const listEl = document.createElement("li");
    listEl.textContent = ingredient;
    listEl.classList.add("item");
    return listEl;
  });
};

const ingredientsEl = ingredientsList(ingredients);
const ingredientCollection = document.querySelector("#ingredients");
ingredientCollection.append(...ingredientsEl);
