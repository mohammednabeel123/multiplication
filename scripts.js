const firstNumber = document.getElementById("NumberToMultiply");
const secondNumber = document.getElementById("secondNumber");
const Calculate = document.getElementById("Calculate");
const textarea = document.getElementById("textarea");

Calculate.addEventListener("click", function () {
  let first = parseInt(NumberToMultiply.value);
  let second = parseInt(secondNumber.value);
  console.log(first * second);

  // Multiplicatiion of numbers from the first Number to the second number
  for (let i = 1; i <= second; i++) {
    if (!isNaN(first) && !isNaN(second)) {
      textarea.innerHTML += `${first} * ${i}  =  ${first * i}<br>`;
      textarea.style.gap = "10px";
    } else {
      textarea.innerHTML = "Please enter valid numbers.";
    }
  }
});

document.getElementById("Clear").addEventListener("click", function () {
  firstNumber.value = "";
  secondNumber.value = "";
  textarea.innerHTML = "";
});
