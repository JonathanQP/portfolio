let burgerKnop = document.querySelector(".burger");
let navMenu = document.querySelector("nav");
let header = document.querySelector("header");
let main = document.querySelector("main");
let body = document.querySelector("body");
let pijlen = document.querySelectorAll(".pijlen");

function klikMenu() {
	navMenu.classList.toggle("zichtbaar");
	if (navMenu.classList.contains("zichtbaar")) {
		navMenu.classList.remove("onzichtbaar");
	} else {
		navMenu.classList.add("onzichtbaar");
	}
}

burgerKnop.addEventListener("click", klikMenu);

let darkLink = document.querySelectorAll(".mode a")[0];
let lightLink = document.querySelectorAll(".mode a")[1];
let mijnCSS = document.querySelector("#switchcss");

function lightSwitch() {
  lightLink.classList.add("selected")
  darkLink.classList.remove("selected")
	mijnCSS.setAttribute("href","stijl-light.css");
}
function darkSwitch() {
  darkLink.classList.add("selected")
  lightLink.classList.remove("selected")
	mijnCSS.setAttribute("href","stijl-dark.css");
}

lightLink.addEventListener("click", lightSwitch);
darkLink.addEventListener("click", darkSwitch);

let images = ["img/me.png", "img/me2.png", "img/me3.png", "img/me4.png", "img/me5.png", "img/me6.png", "img/me7.png", "img/me8.png", "img/me9.png"];
let me = document.querySelector("#me");
let willekeurigGetal = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function meSwitch() {
	let i = willekeurigGetal(0, 6);
	this.src = images[i];
	this.style.filter = "grayscale(0%)"
}
function meBack() {
 this.src = images[0];
 this.style.filter = "grayscale(100%)"
}

if (me !== null) {
	me.addEventListener("mouseover", meSwitch);
	me.addEventListener("mouseout", meBack);
}

let i = 0;
let scroll = 0;

while (i < pijlen.length) {
	pijlen[i].addEventListener("click", function(event) {
		window.scroll({
			top: (window.innerHeight * this.getAttribute("data-factor") *1000),
			behavior: "smooth"});
		event.preventDefault();
	}, false);
	i++;
}

let mijnDiv = document.querySelector(".info");
let maxToLeft = window.innerWidth - 150;

window.addEventListener("scroll", function() {
	if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 2) {
		body.classList.remove("top");
		body.classList.add("bottom");
		mijnDiv.style.left = 0;
	} else if (body.classList.contains("bottom")) {
		if (window.pageYOffset == 0) {
			body.classList.remove("bottom");
			body.classList.add("top");
		}
	}
});

if (document.documentElement.scrollHeight !== document.documentElement.clientHeight) {
	i = 0;
	while (i < pijlen.length) {
		pijlen[i].classList.remove("verbergpijl");
		i++;
	}
}
