// VARIABLE DECLARATIONS
let customName = document.querySelector("#customname");
let randomize = document.querySelector(".btn-primary");
let body = document.querySelector("body");
let weightM = (300 * 0.453592).toFixed(1);
let tempM = (((94 - 32) * 5) / 9).toFixed(1);

let storyText = `It was 94 farenheit outside, so :insertx: went for a walk. When they got to
  :inserty:, they stared in horror for a few moments, then :insertz:.
  Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.`;

let name = ["Donald Trump", "Jackie Chan", "Santa Claus"];
let place = ["Area 51", "Death Valley", "Aruba"];
let verb = ["spontaneously combusted", "rapidly sublimated", "evaporated instantly"];

// RANDOM INDEX FUNCTION
function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}
//TEXT REPLACE FUNCTION
function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(name);
  let yItem = randomValueFromArray(place);
  let zItem = randomValueFromArray(verb);
  let allInsertX = /:insertx:/gi;

  newStory = newStory.replace(allInsertX, xItem);
  newStory = newStory.replace(":inserty:", yItem);
  newStory = newStory.replace(":insertz:", zItem);

  if (customName.value != "") {
    newStory = newStory.replace("Bob", customName.value);
  }
  if (document.getElementById("metric").checked) {
    newStory = newStory.replace("300 pounds", `${weightM} kilograms`);
    newStory = newStory.replace("94 farenheit", `${tempM} celcius`);
  }
  //REMOVE OLD STORY CLASS, INSERT NEW PARAGRAPH
  body.removeChild(document.querySelector(".card-body"));
  body.insertAdjacentHTML("beforeend", `<p class="card-body" style="visibility: visible">${newStory}</p>`);
}
randomize.addEventListener("click", result);
