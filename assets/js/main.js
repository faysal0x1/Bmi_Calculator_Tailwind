function calculateBmi() {
  var weight = document.getElementById("weight").value;
  //   Height
  var fit = document.getElementById("Fit").value * 12;
  var inchi = document.getElementById("inchi").value;
  if(!inchi)
  {
    inchi=0;
  }
  var height = (parseInt(fit) + parseInt(inchi))*0.0254;

  var BMI = (parseInt(weight)/ (Math.pow(height,2))).toFixed(2)
  //   var height = document.getElementById("height").value / 100; // Convert cm to m
  // var age = document.getElementById("years").value;
  document.getElementById("result").innerHTML = BMI;
}

var calculateButton = document.getElementById("calculate");
calculateButton.addEventListener("click", calculateBmi);
