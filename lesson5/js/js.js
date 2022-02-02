
// Function for adding to List

function addChapter(){
    let chapter = document.getElementById("favchap").value;

    let listItem = document.createElement("li");
    listItem.innerHTML = chapter;

    let btn = document.createElement("button");
    btn.innerHTML = "X";
    btn.setAttribute("onclick","removeChapter(this)");

    listItem.appendChild(btn);
    let list = document.querySelector(".list");
    list.appendChild(listItem);


}

// Add event listener to add chapter button
document.querySelector("#addBtn").addEventListener("click",addChapter);

// Function for removing chapter from list
function removeChapter(btn){
    let listItem = btn.parentElement;
    let list = document.querySelector(".list");
    list.removeChild(listItem);
    
}