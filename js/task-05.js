const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};

const defaultValue = "Anonymous";

refs.input.addEventListener("input", onInput);
function onInput(event) {
  if (event.currentTarget.value.trim() === "") {
    refs.span.textContent = defaultValue;
  } else {
    refs.span.textContent = event.currentTarget.value;
  }
}

// =======================================

// РОЗВ'ЯЗОК З ПРАКТИЧНОГО ЗАНЯТТЯ

// const inputRef = document.querySelector("#name-input");

// const inputContentRef = document.querySelector("#name-input");

// inputRef.addEventListener(
//   "input",
//   ({ target: { value } }) =>
//     (inputContentRef.textContent = value.trim() || "Anonymous")
// );
