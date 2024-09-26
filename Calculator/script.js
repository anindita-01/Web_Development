let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      const result = eval(string);
      input.value = result;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      if (e.target.innerHTML == "x")string += "*";
      else if (e.target.innerHTML == "\u00F7") string += "/";
      else string += e.target.innerHTML;
      input.value = string;
    }
  });
});
