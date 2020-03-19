//building search box
var citySearchInput = document.querySelector("#citySearch-text");
var citySearchForm =document.querySelector("#citySearch-form");
var citySearchList = document.querySelector("#citySearch-list");

var citySearch = ();

init();
function renderCitySearch() {
citySearchListHTML = "";
for (var i = 0; i < citySearch.length;i++) {
    var citySearch=citySearches[i];
    var li=document.createElement("li");
    li.textContent = citySearch;
    li.setAttribute("data-index",i);
    var button = document.createElement("button");
    button.textContent = "Clear History";

    li.appendChild(button);
    citySearchList.appendChild(li);
}
}

function init() {
    var storedCitySearches = JSON.parse(localStorage.getElement("citySearches"));
    if (storedCitySearches !== null) {
        citySearches = storedCitySearches;
    }
    render citySearches();
}

function storedCitySearches() {
    localStorage.setItem("citysearches",JSON.stringify(citySearches));
}

citySearchForm.addEventListener("submit",function(event) {
    event.preventDefault();
    var citySearchText = citySearchInput.nodeValue.trim();
    if(citySearchText ==="") {
        return;
    }

    citySearches.push(todoText);
    citySearchInput.value = "";

    storeCitySearches();
    renderCitySearches();
});

citySearchList.addEventListener("click", function(event) {
var element = event.target;

if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    citySearches.splice(index, 1);
    storeCitySearches();
    renderCitySearches();
}
});

//search history popping up when search box is clicked.

