(function () {
const increaseButton = document.querySelector(".btns__btn_increase");
const decreaseButton = document.querySelector(".btns__btn_decrease");

const resetButton = document.querySelector(".btns__btn_reset");

// создаю функцию createCounter здесь
function createCounter() {
  const counterText = document.querySelector(".counter__text");
  let counter = 0;

  function render() {
    // перенесу логику добавления текста в DOM сюда
    counterText.textContent = counter;
  }

  function increaseCounter() {
    counter += 1;
    render();
  }

  function decreaseCounter() {
    counter = counter - 1;
    render();
  }

  function resetCounter() {
    counter = 0;
    render();
  }

  return {
    increaseCounter,
    decreaseCounter,
    resetCounter,
  };
}

const myCounter = createCounter();

increaseButton.addEventListener("click", function () {
  myCounter.increaseCounter();
});

decreaseButton.addEventListener("click", function () {
  myCounter.decreaseCounter();
});

resetButton.addEventListener("click", function () {
  myCounter.resetCounter();
});
})();