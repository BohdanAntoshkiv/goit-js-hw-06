// Завдання 6
// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />
// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const input = document.querySelector("#validation-input");

input.addEventListener("blur", onCheckNumberOfDigits);

function onCheckNumberOfDigits(event) {
    const inputElements = event.currentTarget;
    if (Number(inputElements.dataset.length) === inputElements.value.length) {
        editClassList("valid", "invalid");
        return
    }
    editClassList("invalid", "valid");
}

function editClassList(toAdd, toRemove) {
  input.classList.remove(toRemove);
  input.classList.add(toAdd);
}