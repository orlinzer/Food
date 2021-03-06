import calculate from './calculate.js';
import { calculateCalories } from './calculate.js';

// // var url = window.location.pathname;
// var url =  window.location.search;
// console.log(url);
// console.log(url.split('?')[1]);
// console.log(url.split('?')[1].split('&'));

const urlParams = new URLSearchParams(window.location.search);
const entries = urlParams.entries();
const params = {};
for (var entry of entries) {
  params[entry[0]] = entry[1];
}
console.log(params);
var calculated = calculate(params);
console.log(calculated);


function monthDiff(d1, d2) {
  var months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
}

function yearDiff(d1, d2) {
  var years;
  years = monthDiff(d1, d2) / 12;
  return years <= 0 ? 0 : years;
}

function timeDiff(d1, d2) {
  return (((d2.getTime()) - d1.getTime()) / (3600 * 1000 * 24 * 365));

}


var ageInput;
var ageOutput;
var age = 29;

var genderMaleInput;
var genderFemaleInput;
var genderOtherInput;
var gender = 'other';

var dateOfBirthInput;
var weightInput;
var weightOutput;
var heightInput;
var heightOutput;
var genderAutocompleteInput;
var exerciseNoActiveInput;
var exerciseSomeActiveInput;
var exerciseNormalActiveInput;
var exerciseVeryActiveInput;
var exerciseAutocompleteInput;
var caloriesInput;
var caloriesOutput;



function load () {
  ageInput = document.getElementById('age-input');
  ageOutput = document.getElementById('age-output');
  genderMaleInput = document.getElementById('gender-male-input');
  genderFemaleInput = document.getElementById('gender-female-input');
  genderOtherInput = document.getElementById('gender-other-input');
  dateOfBirthInput = document.getElementById('date-of-birth-input');
  weightInput = document.getElementById('weight-input');
  weightOutput = document.getElementById('weight-output');
  heightInput = document.getElementById('height-input');
  heightOutput = document.getElementById('height-output');
  genderAutocompleteInput = document.getElementById('gender-autocomplete-input');
  exerciseAutocompleteInput = document.getElementById('exercise-autocomplete-input');
  exerciseNoActiveInput = document.getElementById('exercise-no-active-input');
  exerciseSomeActiveInput = document.getElementById('exercise-some-active-input');
  exerciseNormalActiveInput = document.getElementById('exercise-Normal-active-input');
  exerciseVeryActiveInput = document.getElementById('exercise-Very-active-input');
  caloriesInput = document.getElementById('calories-input');
  caloriesOutput = document.getElementById('calories-output');
  var legends = document.getElementsByTagName('legend');

  for (var i = 0; legends.length; i++) {
    let element = legends[i];
    if (typeof(element) == 'undefined') // XXX
    element.addEventListener('click', (event) => {
      let elementClass = element.parentElement.classList;
      if (elementClass.contains('collapsed')) {
        element.parentElement.classList.remove('collapsed');
      } else {
        element.parentElement.classList.add('collapsed');
      }
    });
  }


  if (params) {
    if (params.age) {
      ageInput.value = params.age;
      ageOutput.innerText = params.age;
    }
    if (params.gender == 'female') {
      genderFemaleInput.checked = true;
    } else if (params.gender == 'male') {
      genderMaleInput.checked = true;
    } else {
      genderOtherInput.checked = true;
    }
    var result = calculate(params.age, params.gender);
    console.log(result);
  }

  dateOfBirthInput.oninput = (event) => {
    var selectedDate = new Date(dateOfBirthInput.value);
    var now = new Date();
    var months = monthDiff(selectedDate, now);
    ageInput.value = monthDiff(selectedDate, now) / 12;
    ageOutput.innerText = "Your age is: " + Math.floor(monthDiff(selectedDate, now) / 12) + " years and " + (monthDiff(selectedDate, now) % 12) + " months";
  }
  ageInput.oninput = (event) => {
    var now = new Date();
    var selectedDate = new Date(now.getTime() - (ageInput.value * 356 * 24 * 3600 * 1000));

    var day = ("0" + selectedDate.getDate()).slice(-2);
    var month = ("0" + (selectedDate.getMonth() + 1)).slice(-2);

    var today = selectedDate.getFullYear() + "-" + (month) + "-" + (day);
    dateOfBirthInput.value = today;
    ageOutput.innerText = "Your age is: " + Math.floor(monthDiff(selectedDate, now) / 12) + " years and " + (monthDiff(selectedDate, now) % 12) + " months";
  }

  weightInput.oninput = (event) => {
    weightOutput.innerText = weightInput.value + " Kilograms"
  }

  heightInput.oninput = (event) => {
    heightOutput.innerText = heightInput.value + " Centimeters"
  }

  caloriesInput.oninput = (event) => {
    caloriesOutput.innerText = caloriesInput.value + " Calories"
  }

  genderMaleInput.oninput = (event) => {
    // console.log(genderMaleInput.value);
  }
  genderFemaleInput.oninput = (event) => {
    // console.log(genderFemaleInput.value);
  }
  genderOtherInput.oninput = (event) => {
    // console.log(genderOtherInput.value);
  }


}

window.onload = load;