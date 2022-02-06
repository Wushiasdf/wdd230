//Current Time
const time = document.querySelector(".time")
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
time.innerHTML = `<em>${fulldate}</em>`;

//Last Modified
var update = document.lastModified;
var year = 2022;

document.querySelector("#year").innerHTML = year.toString();

document.getElementById("update").innerHTML = update.toString();

// Hamburger
function toggleMenu(){
	document.querySelector("#nav").classList.toggle("open");
	document.querySelector("#ham").classList.toggle("open");
	document.querySelector("#line").classList.toggle("open");
}
const ham = document.querySelector("#ham");
ham.onclick = toggleMenu

// Meet and Greet Banner

let day = now.getDay();
if (day == 1 || day == 2){
	document.querySelector("#banner-message").classList.toggle("show");
}

