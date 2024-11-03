function searchFormFunction(event) {
  event.preventDefault();
  let citySearch = document.querySelector("#city-input");
  let city = document.querySelector("#city");
  city.innerHTML = citySearch.value;
}

let searchFormELement = document.querySelector("#search-form");
searchFormELement.addEventListener("submit", searchFormFunction);
