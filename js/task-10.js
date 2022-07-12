function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const [input, createBtn, destroyBtn] =
  document.querySelector("#controls").children;
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", onCreate);
function onCreate() {
  const arr = [];
  for (let index = 1; index <= +input.value; index++) {
    const wrapper = document.createElement("div");
    wrapper.style.height = wrapper.style.width = `${30 + index * 10}px`;
    wrapper.style.backgroundColor = getRandomHexColor();
    arr.push(wrapper);
  }
  boxes.append(...arr);
}

destroyBtn.addEventListener("click", onDestroy);
function onDestroy() {
  boxes.innerHTML = "";
  input.value = "";
}
