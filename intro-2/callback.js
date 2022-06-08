// function sum
function penjumlahan(nilai1, nilai2) {
  return nilai1 + nilai2;
}

function pengurangan(nilai1, nilai2, displayZero, displayMinus) {
  let result = nilai1 - nilai2;

  if (result <= 0) {
    return displayZero(result, displayMinus); // ini ngehit function zero
  } else {
    return nilai1 - nilai2;
  }
}

function pembagian(nilai1, nilai2) {
  return nilai1 / nilai2;
}

function perkalian(nilai1, nilai2) {
  return nilai1 * nilai2;
}

function zero(value, callback) {
  if (value === 0) {
    return "Nilai sudah kosong";
  } else if (value < 0) {
    return callback();
  }
}

function minus(value) {
  return "Nilai Minus";
}

// function yang di dalemnya itu manggil function lain
function displaySum({
  nilai1 = 0,
  nilai2 = 0,
  type,
  operator,
  handler,
  displayZero,
  displayMinus,
}) {
  return `hasil ${type} ${nilai1} ${operator} ${nilai2} = ${handler(
    nilai1,
    nilai2,
    displayZero, // ini function 
    displayMinus // ini function
  )}`;
}

// dikirim dari sini
console.log(
  displaySum({
    operator: "-",
    nilai1: 10,
    handler: pengurangan,
    type: "pengurangan",
    nilai2: 11,
    displayZero: zero,
    displayMinus: minus,
  })
);

// PROMISE (JANJI) = DITEPATI / TIDAK DITEPATI

// console.log(displaySum(5, 2, "pengurangan", "-", pengurangan));
// console.log(displaySum(7, 3, "pembagian", "/", pembagian));
// console.log(displaySum(8, 4, "perkalian", "*", perkalian));
