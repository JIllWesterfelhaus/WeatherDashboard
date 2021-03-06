//City search, button and history, adapted from "Get Coding!," by Young Rewired State, To Do list activity, pages 94-114.
//Building city search button
function addItem() {
    var newItem = document.createElement("div");
    newItem.innerHTML = document.getElementById("citySearch").value;
    newItem.onclick = removeItem;
    document.getElementById("list").appendChild(newItem);
    saveList();
}
//clearing item when name of city clicked
function removeItem() {
    document.getElementById("list").removeChild(this);
    saveList();
}
//adding to list of searched cities
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



