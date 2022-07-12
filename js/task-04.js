// // розібрати ще раз

// РОЗВ'ЯЗОК З ПРАКТИЧНОГО ЗАНЯТТЯ

// const decrButton = document.querySelector(`[data-action="decrement"]`);
// const incrButton = document.querySelector(`[data-action="increment"]`);

// const counterValueEl = document.querySelector("#value");

// decrButton.addEventListener("click", onClickDecrement);

// function onClickDecrement() {
//   counterValueEl.textContent -= 1;
// }

// incrButton.addEventListener("click", onClickIncrement);

// function onClickIncrement() {
//   counterValueEl.textContent = Number(counterValueEl.textContent) + 1;
// }

// ======================================
// САМОСТІЙНА РОБОТА
const decrementButton = document.querySelector('[data-action ="decrement"]');
console.log(decrementButton);
const incrementButton = document.querySelector('[data-action ="increment"]');
console.log(incrementButton);
const value = document.querySelector("#value");
console.log(value);

let counterValue = 0;

function initialValue() {
  value.textContent = counterValue;
}

decrementButton.addEventListener("click", onClickDecrementButton);

function onClickDecrementButton() {
  counterValue -= 1;
  initialValue();
}

incrementButton.addEventListener("click", onClickIncrementButton);

function onClickIncrementButton() {
  counterValue += 1;
  initialValue();
}

// ==================================
