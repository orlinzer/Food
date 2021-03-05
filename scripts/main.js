import calculate from './calculate.js';
import { calculateCalories } from './calculate.js';
console.log(calculateCalories(29, 'male', 70, 1.71, 1.27));

const urlParams = new URLSearchParams(window.location.search);
const entries = urlParams.entries();
const params = {};
for (var entry of entries) {
  params[entry[0]] = entry[1];
}
console.log(params);

// // var url = window.location.pathname;
// var url =  window.location.search;
// console.log(url);
// console.log(url.split('?')[1]);
// console.log(url.split('?')[1].split('&'));


var ageInput;
var agePreview;
var age = 29;

var genderMaleInput;
var genderFemaleInput;
var genderOtherInput;
var gender = 'other';

var dateOfBirthInput;
var weightInput;
var heightInput;
var genderAutocompleteInput;
var exerciseNoActiveInput;
var exerciseSomeActiveInput;
var exerciseNormalActiveInput;
var exerciseVeryActiveInput;
var exerciseAutocompleteInput;
var caloriesInput;



function load () {
  ageInput = document.getElementById('age-input');
  agePreview = document.getElementById('age-preview');
  genderMaleInput = document.getElementById('gender-male-input');
  genderFemaleInput = document.getElementById('gender-female-input');
  genderOtherInput = document.getElementById('gender-other-input');
  dateOfBirthInput = document.getElementById('date-of-birth-input');
  weightInput = document.getElementById('weight-input');
  heightInput = document.getElementById('height-input');
  genderAutocompleteInput = document.getElementById('gender-autocomplete-input');
  exerciseAutocompleteInput = document.getElementById('exercise-autocomplete-input');
  exerciseNoActiveInput = document.getElementById('exercise-no-active-input');
  exerciseSomeActiveInput = document.getElementById('exercise-some-active-input');
  exerciseNormalActiveInput = document.getElementById('exercise-Normal-active-input');
  exerciseVeryActiveInput = document.getElementById('exercise-Very-active-input');
  caloriesInput = document.getElementById('calories-input');

  if (params) {
    if (params.age) {
      ageInput.value = params.age;
      agePreview.innerText = params.age;
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
    ageInput.value = (((new Date().getTime()) - (new Date(dateOfBirthInput.value)).getTime()) / (3600 * 1000 * 24 * 365));
    agePreview.innerText = ageInput.value; // TODO: month and year
  }
  ageInput.oninput = (event) => {
    // TODO: change the dateOfBirth
    agePreview.innerText = ageInput.value; // TODO: month and year
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