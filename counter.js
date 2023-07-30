let updatevalue1 = document.getElementById("updatevalue");
function oninc() {
  let a = updatevalue1.textContent;
  let countervalue = parseInt(a) + 1;
  if (countervalue > 0) {
    updatevalue1.style.color = "green";
  } else if (countervalue < 0) {
    updatevalue1.style.color = "red";
  } else {
    updatevalue1.style.color = "black";
  }
  updatevalue1.textContent = countervalue;
}
function ondec() {
  let a = updatevalue1.textContent;
  let countervalue = parseInt(a) - 1;
  if (countervalue > 0) {
    updatevalue1.style.color = "green";
  } else if (countervalue < 0) {
    updatevalue1.style.color = "red";
  } else {
    updatevalue1.style.color = "black";
  }
  updatevalue1.textContent = countervalue;
}
function onreset1() {
  updatevalue1.textContent = 0;
  updatevalue1.style.color = "black";
}
