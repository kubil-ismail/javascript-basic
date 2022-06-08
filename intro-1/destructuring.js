const biodata = {
  firstName: "Bilkis",
  lastName: "Ismail",
  role: "Trainer",
  "nama-lengkap": "BILKIS ISMAIL",
  favoriteBand: ["tulus", "sol7", "noah"],
  detail: {
    hoby: "touring",
    artistFavorite: "GNR",
    favoritePlace: "Bandung",
  },
};

const {
  detail: { hoby },
  favoriteBand: [, , band3],
} = biodata;

const {
  firstName,
  lastName,
  role: jabatan,
  "nama-lengkap": namaLengkap,
} = biodata;

// console.log(firstName);
// console.log(lastName);
// console.log(jabatan);
// console.log(namaLengkap);

const trainer = ["bilkis", "risano", "setiawan", "tama"];

const [, , , trainer4] = trainer;

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [angka1, angka2, ...others] = numbers;

// const findNumber = numbers.find((res) => res === 9);
const findNumberIndex = trainer.findIndex((res) => res === "setiawan");

console.log(findNumberIndex);
console.log(trainer[findNumberIndex]);
