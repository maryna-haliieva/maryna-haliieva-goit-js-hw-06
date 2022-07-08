const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};

const defaultValue = "Anonymous";

refs.input.addEventListener("input", onEventInput);
function onEventInput(event) {
  if (event.currentTarget.value === "") {
    refs.span.textContent = defaultValue;
  } else {
    refs.span.textContent = event.currentTarget.value;
  }
}
