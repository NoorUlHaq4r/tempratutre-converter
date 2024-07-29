// function convert(){
//     var fromUnit = document.getElementById('fromUnit').value
//     var toUnit = document.getElementById('toUnit').value
//     var temprature = parseFloat(document.getElementById('temprature').value)
    
//     var converted;
//     var ResultUnit;
    

//     switch(fromUnit){ 
//         case 'C':
//             if (toUnit === 'F'){
//                 converted = (temprature * 9/5) + 32
//                 ResultUnit = 'F'
//             } else if(toUnit === "K") {
//                 converted = temprature + 273.15
//                 ResultUnit = 'K'
//             } else {
//                 converted = temprature
//                 ResultUnit = 'C'
//             } 
//             break;
//         case 'F':
//             if (toUnit === 'C'){
//                 converted = (temprature - 32) * 5/9
//                 ResultUnit = 'C'
//             } else if(toUnit === "K") {
//                 converted = (temprature - 32) * 5/9 + 273.15
//                 ResultUnit = 'K'
//             } else {
//                 converted = temprature
//                 ResultUnit = 'F'
//             } 
//             break; 
//         case 'K':
//             if (toUnit === 'C'){
//                 converted = temprature - 273
//                 ResultUnit = 'C'
//             } else if(toUnit === "K") {
//                 converted = (temprature - 273.15)* 9/5 +32
//                 ResultUnit = 'K'
//             } else {
//                 converted = temprature
//                 ResultUnit = 'C'
//             } 
//             break;
//     }
    

//     document.getElementById('result').value = converted.toFixed(2) + ' ' + ResultUnit

// }
function convert() {
    var fromUnit = document.getElementById('fromUnit').value;
    var toUnit = document.getElementById('toUnit').value;
    var temperature = parseFloat(document.getElementById('temperature').value);
  
    // Check if temperature is a valid number
    if (isNaN(temperature)) {
      alert("Invalid temperature value");
      return;
    }
  
    var converted;
    var resultUnit;
  
    switch (fromUnit) {
      case 'C':
        if (toUnit === 'F') {
          converted = (temperature * 9 / 5) + 32;
          resultUnit = 'F';
        } else if (toUnit === 'K') {
          converted = temperature + 273.15;
          resultUnit = 'K';
        } else {
          converted = temperature;
          resultUnit = 'C';
        }
        break;
      case 'F':
        if (toUnit === 'C') {
          converted = (temperature - 32) * 5 / 9;
          resultUnit = 'C';
        } else if (toUnit === 'K') {
          converted = (temperature - 32) * 5 / 9 + 273.15;
          resultUnit = 'K';
        } else {
          converted = temperature;
          resultUnit = 'F';
        }
        break;
      case 'K':
        if (toUnit === 'C') {
          converted = temperature - 273.15;
          resultUnit = 'C';
        } else if (toUnit === 'F') {
          converted = (temperature - 273.15) * 9 / 5 + 32;
          resultUnit = 'F';
        } else {
          converted = temperature;
          resultUnit = 'K';
        }
        break;
    }
  
    document.getElementById('result').value = converted.toFixed(2) + ' ' + resultUnit;
  }