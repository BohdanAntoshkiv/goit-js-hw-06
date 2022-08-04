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