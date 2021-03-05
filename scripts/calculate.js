
var food = {};

export function formatAge (age) {
  return {
    years: Math.floor(age),
    months: Math.floor((age * 12)) % 12
  }
}

export var PG = {
  NO_ACTIVE: 1,
  SOME_ACTIVE: 1.12,
  NORMAL_ACTIVE: 1.27,
  VERY_ACTIVE: 1.45,
};

// hight in meters
// age in years
// weight in k"g
export function calculateCalories (age, gender, weight, hight, pg) {
  var formattedAge = formatAge(age);
  var years = formattedAge.years;
  var months = formattedAge.months;

  if (gender == 'male') {
    return 662 - (9.53 * age) + (pg * (15.91 * weight)) + (539.6 * hight);
  }
  return 354 - (6.91 * age) + (pg * (9.36 * weight)) + (726 * hight);
}

export function calculate (age, gender, pregnant, nursing, weight, calories) {

  // food.waterFromFood in litters
  // food.waterFromDrinks in litters
  if (pregnant) {
    food.waterFromFood = 0.7; // litters
    food.waterFromDrinks = 2.3; // litters
  } else if (nursing) {
    food.waterFromFood = 0.7; // litters
    food.waterFromDrinks = 3.1; // litters
  } else if (age < 1) {
    if (months < 6) {
      food.waterFromFood = 0.0; // litters
      food.waterFromDrinks = 0.7; // litters * from milk or formula.
    } else {
      food.waterFromFood = 0.2; // litters
      food.waterFromDrinks = 0.6; // litters
    }
  } else if (age >= 1 && age <= 3) {
    food.waterFromFood = 0.4; // litters
    food.waterFromDrinks = 0.9; // litters
  } else if (age <= 8) {
    food.waterFromFood = 0.5; // litters
    food.waterFromDrinks = 1.2; // litters
  } else if (gender == 'male') {
    if (age <= 13) {
      food.waterFromFood = 0.6; // litters
      food.waterFromDrinks = 1.8; // litters
    } else if (age <= 18) {
      food.waterFromFood = 0.7; // litters
      food.waterFromDrinks = 2.6; // litters
    } else if (age >= 19) {
      food.waterFromFood = 0.7; // litters
      food.waterFromDrinks = 3.0; // litters
    }
  } else {
    if (age <= 13) {
      food.waterFromFood = 0.5; // litters
      food.waterFromDrinks = 1.6; // litters
    } else if (age <= 18) {
      food.waterFromFood = 0.5; // litters
      food.waterFromDrinks = 1.8; // litters
    } else if (age >= 19) {
      food.waterFromFood = 0.5; // litters
      food.waterFromDrinks = 2.2; // litters
    }
  }

  // food.carbohydrates in grams and most of them complex
  food.carbohydratesMin = 0.55 * calories;
  food.carbohydratesMax = 0.6 * calories;

  // food.proteins in grams
  food.proteinsMin = Math.min(0.8 * weight, 0.1 * calories);
  food.proteinsMax = Math.max(0.8 * weight, 0.35 * calories);

  // food.fats in grams and less with ravuy, colasterol, and trans.
  food.fatsMin = '?';
  food.fatsMax = 0.35 * calories;

  // food.fibers in grams
  if (pregnant) {
    food.fibers = 28 // grams
  } else if (nursing) {
    food.fibers = 29 // grams
  } else if (age >= 1 && age <= 3) {
    food.fibers = 19 // grams
  } else if (age <= 8) {
    food.fibers = 25 // grams
  } else if (gender == 'male') {
    if (age <= 13) {
      food.fibers = 31 // grams
    } else if (age <= 50) {
      food.fibers = 38 // grams
    } else {
      food.fibers = 30 // grams
    }
  } else {
    if (age <= 18) {
      food.fibers = 26 // grams
    } else if (age <= 50) {
      food.fibers = 25 // grams
    } else {
      food.fibers = 21 // grams
    }
  }
  food.fibersMin = Math.min(food.fibers, 0.017 * calories);
  food.fibersMax = Math.max(food.fibers, 0.017 * calories);

  // food.vitaminA in micro grams
  food.vitaminAMin = 700;
  food.vitaminAMax = 900;
  food.vitaminAMaxNonTox = 3000;

  // food.vitaminD in micro grams
  food.vitaminDMin = 5;
  food.vitaminDMax = 10;
  food.vitaminDMaxNonTox = 50;

  // food.vitaminE in milligrams
  food.vitaminE = 15;
  food.vitaminEMaxNonTox = 1000;

  // food.vitaminK in micro grams
  food.vitaminKMin = 90;
  food.vitaminKMax = 120;
  food.vitaminKMaxNonTox = '?';

  // food.vitaminC in milligrams
  food.vitaminCMin = 75;
  food.vitaminCMax = 90;
  food.vitaminCMaxNonTox = 2000;

  // food.vitaminB1 in milligrams
  food.vitaminB1Min = 1.1;
  food.vitaminB1Max = 1.2;
  food.vitaminB1MaxNonTox = '?';

  // food.vitaminB2 in milligrams
  food.vitaminB2Min = 1.1;
  food.vitaminB2Max = 1.3;
  food.vitaminB2MaxNonTox = '?';

  // food.vitaminB3 in milligrams
  food.vitaminB3Min = 14;
  food.vitaminB3Max = 16;
  food.vitaminB3MaxNonTox = 35;

  // food.vitaminB6 in milligrams
  food.vitaminB6Min = 1.3;
  food.vitaminB6Max = 1.7;
  food.vitaminB6MaxNonTox = 100;

  // food.vitaminB12 in micro grams
  food.vitaminB12 = 2.4;
  food.vitaminB12MaxNonTox = '?';

  // food.folicAcid in micro grams
  food.folicAcid = 400;
  food.folicAcidMaxNonTox = 1000;

  // food.pantothenicAcid in milligrams
  food.pantothenicAcid = 5;
  food.pantothenicAcidMaxNonTox = '?';

  // food.Biotin in micro grams
  food.Biotin = 30;
  food.BiotinMaxNonTox = '?';

  // food.calcium in milligrams
  food.calciumMin = 1000;
  food.calciumMax = 1200;
  food.calciumMaxNonTox = 2500;

  // food.potassium in milligrams
  food.potassium = 4700;
  food.potassiumMaxNonTox = '?';

  // food.sodium in milligrams
  food.sodium = 1500;
  food.sodiumMaxNonTox = '?';

  // food.phosphorus in milligrams
  food.phosphorus = 700;
  food.phosphorusMaxNonTox = 4000;

  // food.chlorine in milligrams
  food.chlorineMin = 1800;
  food.chlorineMax = 2300;
  food.chlorineMaxNonTox = '?';

  // food.Magnesium in milligrams
  food.MagnesiumMin = 310;
  food.MagnesiumMax = 420;
  food.MagnesiumMaxNonTox = 350; // from supplements

  // food.sulfur in milligrams
  food.sulfur = '?'; // if there is enough proteins it is enough
  food.sulfurMaxNonTox = '?';

  // food.iron in milligrams
  if (age >= 50 || gender == 'male') {
    food.iron = 8;
  } else {
    food.iron = 18;
  }
  food.ironMaxNonTox = 45;

  // food.zinc in milligrams
  food.zincMin = 8;
  food.zincMax = 11;
  food.zincMaxNonTox = 40;

  // food.manganese in milligrams
  food.manganeseMin = 1.8;
  food.manganeseMax = 2.3;
  food.manganeseMaxNonTox = 11;

  // food.copper in micro grams
  food.copper = 900;
  food.copperMaxNonTox = 10000;

  // food.fluorine in milligrams
  food.fluorineMin = 3;
  food.fluorineMax = 4;
  food.fluorineMaxNonTox = 10;

  // food.iodine in micro grams
  food.iodineMin = 150;
  food.iodineMaxNonTox = 1100;

  // food.chromium in micro grams
  food.chromiumMin = 25;
  food.chromiumMax = 35;
  food.chromiumMaxNonTox = '?';

  // food.molybdenum in micro grams
  food.molybdenum = 45;
  food.molybdenumMaxNonTox = 2000;

  // food.selenium in micro grams
  food.selenium = 55;
  food.seleniumMaxNonTox = 400;

  // food.arsenic in micro grams
  food.arsenic = '?';

  // food.boron in micro grams
  food.boron = '?';

  // food.nickel in micro grams
  food.nickel = '?';

  // food.silicon in micro grams
  food.silicon = '?';

  // food.tin in micro grams
  food.tin = '?';

  // food.anadium in micro grams
  food.anadium = '?';

  // food.lithium in micro grams
  food.lithium = '?';

  return food;
}

export default calculate;