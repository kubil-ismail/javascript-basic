var anotherStuff = "lorem";

// ES 5 DECLARATION
// function doStuff(firstName, lastName = "Ismail") {
//   console.log(`Hello ${firstName} ${lastName}`);
// }

// ES 5 Expression
// doStuff2("Bilkis", "Ismail");

const doStuff2 = function () {
  console.log(`Hello ${firstName} ${lastName}`);
};

// // ES 6 ARROW FUNCTION
const doStuff3 = (_) => {
  return firstName + lastName; // stop in here

  console.log(`Hello ${fullName}`);
};

// self invoking
(function (firstName, lastName = "Ismail") {
  console.log(`Hello ${firstName} ${lastName}`);
})("Adi", "Nanang");

((firstName, lastName = "Ismail") => {
  console.log(`Hello ${firstName} ${lastName}`);
})("Adi", "Nanang");
