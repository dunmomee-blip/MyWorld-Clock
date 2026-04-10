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
