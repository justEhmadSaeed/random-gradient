const h3 = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.querySelector("#gradient");
const random = document.querySelector("button");

setGradient = () => {
  body.style.background = _linearGradient();
  random.style.background = _linearGradient();
  h3.textContent = `${body.style.background}`;
};
_linearGradient = () => {
  return (
    "linear-gradient(to right," + color1.value + ", " + color2.value + " )"
  );
};

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// Function to copy the generated gradient to clipboard
copyGradient = () => {
  let element = document.getElementById("gradient-value");
  let elementText = element.textContent;
  navigator.clipboard.writeText(elementText);
  alert("Gradient CSS copied ! 🙌");
};

////Roshaan made these Changess
randomColor = () => {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

random.addEventListener("click", () => {
  color1.value = randomColor();
  color2.value = randomColor();
  setGradient();
});
