var inputLabel = document.getElementById("inputLabel");

function pushBtn(obj) {
  var pushed = obj.innerHTML;

  if (pushed == "=") {
    // Calculate
    inputLabel.innerHTML = eval(inputLabel.innerHTML);
  } else if (pushed == "AC") {
    // All Clear
    inputLabel.innerHTML = "0";
  } else if (pushed == "DEL") {
    if (inputLabel.innerHTML == "0" || inputLabel.innerHTML == "") {
      inputLabel.innerHTML == "0";
    } else {
      inputLabel.innerHTML = inputLabel.innerHTML.slice(0, -1);
      if (inputLabel.innerHTML == "") {
        inputLabel.innerHTML = "0";
      }
    }
  } else {
    if (inputLabel.innerHTML == "0") {
      inputLabel.innerHTML = pushed;
    } else {
      inputLabel.innerHTML += pushed;
    }
  }
}
