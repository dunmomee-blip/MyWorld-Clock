setInterval(function () {
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkTime = moment();

  newYorkDateElement.innerHTML = newYorkTime
    .tz("America/New_York")
    .format("MMMM Do YYYY");
  newYorkTimeElement.innerHTML = `${newYorkTime.tz("America/New_York").format("h:mm:ss")} <small>${newYorkTime.tz("America/New_York").format("A")}</small>`;
}, 1000);

setInterval(function () {
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment();

  sydneyDateElement.innerHTML = sydneyTime
    .tz("Australia/Sydney")
    .format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = `${sydneyTime.tz("Australia/Sydney").format("h:mm:ss")} <small>${sydneyTime.tz("Australia/Sydney").format("A")}</small>`;
}, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);

  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
<div class="city">
  <div>
    <h2>${cityName}</h2>
    <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
  </div>
  <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
</div>
`;
}

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
