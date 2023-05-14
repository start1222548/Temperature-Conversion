function convert() {
    let input = parseFloat(document.getElementById("input").value);
    let from = document.getElementById("from").value;
    let output = document.getElementById("output");
  
    if (isNaN(input)) {
      output.innerHTML = "Please enter a valid number";
      return;
    }
  
    if (from == "celsius") {
      output.innerHTML = input + " Celsius = " + ((input * 9/5) + 32) + " Fahrenheit = " + (input + 273.15) + " Kelvin";
    } else if (from == "fahrenheit") {
      output.innerHTML = input + " Fahrenheit = " + ((input - 32) * 5/9) + " Celsius = " + ((input - 32) * 5/9 + 273.15) + " Kelvin";
    } else {
      output.innerHTML = input + " Kelvin = " + (input - 273.15) + " Celsius = " + ((input - 273.15) * 9/5 + 32) + " Fahrenheit";
    }
  }
  