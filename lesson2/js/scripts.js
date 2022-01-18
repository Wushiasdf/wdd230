var time = document.lastModified;
const d = new Date();
let year = d.getFullYear();


document.getElementById("year").innerHTML = year.toString();
document.getElementById("update").innerHTML = time.toString();
