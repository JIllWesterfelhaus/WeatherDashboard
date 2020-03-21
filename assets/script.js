//building city search button
function addItem() {
    var newItem = document.createElement("div");
    newItem.innerHTML = document.getElementById("citySearch").value;
    newItem.onclick = removeItem;
    document.getElementById("list").appendChild(newItem);
    saveList();
}
//start function to remove item from list when item clicked:
function removeItem() {
    document.getElementById("list").removeChild(this);
    saveList();
}
//save list to local storage
function saveList() {
    localStorage.storedList = document.getElementById("list").innerHTML;
}

function loadList() {
    document.getElementById("list").innerHTML = localStorage.storedList;
    list.children[i].onclick = removeItem;  
    if(localStorage.storedList) {
        loadList();
    }
}



