var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("#gradient");
var random = document.querySelector("button");

function setGradient() {
	body.style.background = "linear-gradient(to right,"
		+ color1.value + ", " + color2.value + ")";
	h3.textContent = body.style.background;

}
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

////Roshaan made these Changess
function randomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
  }



random.addEventListener("click", function(){
	color1.value = randomColor();
	color2.value = randomColor();
	setGradient();
});