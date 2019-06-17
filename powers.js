// Add the correct string as the first argument to addEventListener().
// Write a function named flightHandlerFunction that will remove the disabled class on the corresponding <section id="flight"> (section, not button)
// and replace it with a class of enabled.
document
  .querySelector("#activate-flight")
  .addEventListener("click", flightHandlerFunction);

function flightHandlerFunction(event) {
  document.querySelector("#flight").classList.remove("disabled");
  document.querySelector("#flight").classList.add("enabled");
}

// write two more JavaScript functions, and two more querySelector().addEventListener() statements for handling the click event on the other two buttons.
// Those event handlers should perform the same step of removing disabled, and adding enabled on the corresponding <section> elements
document
  .querySelector("#activate-mindreading")
  .addEventListener("click", mindreadingFunction);

function mindreadingFunction(event) {
  document.querySelector("#mindreading").classList.remove("disabled");
  document.querySelector("#mindreading").classList.add("enabled");
}
document
  .querySelector("#activate-xray")
  .addEventListener("click", xrayFunction);

function xrayFunction(event) {
  document.querySelector("#xray").classList.remove("disabled");
  document.querySelector("#xray").classList.add("enabled");
}
// Once that is complete, add two more buttons:
// 1.Enable All Powers
// 2.Disable All Powers
// Write two more event handlers for activating and deactivating all powers when the corresponding buttons are clicked. You will need to use the
// document.querySelectorAll() method for these.
document.querySelector("#activate-all").addEventListener("click", enableAllFunction);

function enableAllFunction(event) {
  const enablePower = document.querySelectorAll(".power");
  for (let i = 0; i < enablePower.length; i++) {
    enablePower[i].classList.replace("disabled", "enabled");
  }
}

document.querySelector("#deactivate-all").addEventListener("click", disableAllFunction);
function disableAllFunction(event) {
  const disablePower = document.querySelectorAll(".power");
  for (let i = 0; i < disablePower.length; i++) {
    disablePower[i].classList.replace("enabled", "disabled");
  }
}
// function disableAllFunction(event) {
// document.querySelectorAll("#deactivate-all").classList.replace("enabled","disabled");

//   document.querySelector("#xray").classList.remove("disabled");
//   document.querySelector("#xray").classList.add("enabled");
// }
