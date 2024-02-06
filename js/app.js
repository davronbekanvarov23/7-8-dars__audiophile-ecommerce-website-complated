const counter__minus = document.getElementById("counter__minus");
const counter__plus = document.getElementById("counter__plus");
const counter__result = document.getElementById("counter__result");

let counter = 0;

counter__plus.addEventListener("click", () => {
  if (counter < 10) {
    counter++;
    counter__result.textContent = counter;
  } else {
    alert("siz 10 tadan ko'p mahsulot sotib ololmaysiz !");
  }
});

counter__minus.addEventListener("click", () => {
  if (counter > 0) counter--;
  counter__result.textContent = counter;
});
