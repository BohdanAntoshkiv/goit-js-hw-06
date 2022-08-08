// Завдання 7
// Напиши скрипт, який реагує на зміну
// значення input#font - size - control(подія input)
// і змінює інлайн - стиль span#text, оновлюючи властивість
// font - size.В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const refs = {
  range: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

refs.range.addEventListener(
  "input",
  (evt) => (refs.text.style.fontSize = `${evt.currentTarget.value}px`)
);
refs.text.style.fontSize = `${refs.range.value}px`;
