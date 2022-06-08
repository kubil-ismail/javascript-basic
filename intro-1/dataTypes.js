const age = 20 + 90 / 10; // Number
const fullName = "Bilkis Ismail" || "Bilkis" || `Ismail`; // String
const isMarried = false || true; // Boolean

// Variable Function
const handleWork = function () {
  let time = "09:00";
  if (time === "09:00") {
    console.log("kelas di mulai");
  } else {
    console.log("ngopi dulu");
  }
};

// Function Konvensional
function handleWork2() {
  let time = "09:00";
  if (time === "09:00") {
    console.log("kelas di mulai");
  } else {
    console.log("ngopi dulu");
  }
}

// Function Arrow
const handleWork3 = () => {
  let time = "09:00";
  if (time === "09:00") {
    console.log("kelas di mulai");
  } else {
    console.log("ngopi dulu");
  }
};

const catatanKriminal = null; // NULL
const puasaYangBolong = undefined; // UNDIFINED

let contohUndifined;

// OBJECT
const biodata = {
  hoby: "touring",
  artistFavorite: "GNR",
  favoritePlace: "Bandung",
  favoriteColor: ["Red", "White", "Blue"],
  testData1: () => {
    // cuman bisa manggil di dalem sini doang
    new Date().getDay();
  },
  testData2: function () {
    console.log("print test data 2", this.testData1());
  },
  "nama-belakang": "ismail",
  namaBelakang: "ismail",
};

console.log(typeof age, age);
console.log(typeof biodata);
