/*
1. Write code so that the colour inputs match the background generated on the first page load. 

2. Display the initial CSS linear gradient property on page load.

3. BONUS: Add a random button which generates two random numbers for the colour inputs.
 */

//You got this!
let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let btn = document.getElementById("randBtn");


body.style.background = `linear-gradient(to right, ${color1.value},${color2.value})`;
css.textContent = `${body.style.background}`;

// function setGradient() {
// 	body.style.background = 
// 	"linear-gradient(to right, " 
// 	+ color1.value 
// 	+ ", " 
// 	+ color2.value 
// 	+ ")";

// 	css.textContent = body.style.background + ";";
// }

//get the hexidecimal
function ColorToHex(color) {
	let hexadecimal = color.toString(16);
	// return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;

	if(hexadecimal.length === 1){
		return "0" + hexadecimal;
	}else{
		return hexadecimal;
	}
  }

  function ConvertRGBtoHex(red, green, blue) {
	// return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
	return `#${ColorToHex(red)}${ColorToHex(green)}${ColorToHex(blue)}`;

  }

function RandColors(){
	let red1 = Math.floor(Math.random() * 255);
	let green1 = Math.floor(Math.random() * 255);
	let blue1 = Math.floor(Math.random() * 255);
	const ConvertColor1 = ConvertRGBtoHex(red1,green1,blue1);

	let red2 = Math.floor(Math.random() * 255);
	let green2 = Math.floor(Math.random() * 255);
	let blue2 = Math.floor(Math.random() * 255);
	const ConvertColor2 = ConvertRGBtoHex(red2,green2,blue2);

	const rgbVal1 = `rgb(${red1},${green1},${blue1})`;
	const rgbVal2 = `rgb(${red2},${green2},${blue2})`;

	

	body.style.background = `linear-gradient(to right, ${rgbVal1},${rgbVal2})`;
	css.textContent = `${body.style.background}`;

	color1.value = ConvertColor1;
	color2.value = ConvertColor2;

}



function setGradient(){
	body.style.background = `linear-gradient(to right, ${color1.value},${color2.value})`;
	css.textContent = body.style.background + ";";

}

btn.addEventListener("click",RandColors);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);