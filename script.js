const button = document.getElementById("button");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const counter = document.getElementById("counter");

let value = 0;

button.addEventListener("click", () => {
  value++;
  counter.innerHTML = value;
});

button1.addEventListener("click", () => {
  value--;
  counter.innerHTML = value;
});

button2.addEventListener("mouseover", () => {
  value = 0;
  counter.innerHTML = value;
});
