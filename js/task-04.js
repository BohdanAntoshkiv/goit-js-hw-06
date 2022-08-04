// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector("#value");

const counter = {
    counterValue: 0,
    increment() {
        this.counterValue += 1
    },
    decrement() {
        this.counterValue -= 1
    }
};

incrementButton.addEventListener("click", () => {
    counter.increment();
    valueEl.textContent = counter.counterValue;
});

decrementButton.addEventListener("click", () => {
    counter.decrement();
    valueEl.textContent = counter.counterValue;
})