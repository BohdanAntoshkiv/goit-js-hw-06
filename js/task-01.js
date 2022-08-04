// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5


const listEl = document.querySelector("ul#categories");

const categoriesCalc = (list) => {
  return list.querySelectorAll(".item").length;
};

console.log("Number of categories: ", categoriesCalc(listEl));

const categoryName = (list) => {
  const categoriesList = list.querySelectorAll(".item");
  categoriesList.forEach((item) => {
    console.log("Category: ", item.querySelector("h2").textContent);
    console.log("Elements: ", item.querySelectorAll("ul li").length);
  });
};

categoryName(listEl);
