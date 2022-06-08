let rgb = ["red", "green", "blue"];
let cmyk = ["cyan", "magenta", "yellow", "key", ...rgb];

let biodata = {
  firstName: "Bilkis",
  lastName: "Ismail",
};

// let biodata2 = { ...biodata };
let dataCadangan = { ...biodata };
dataCadangan.firstName = "Ahmad";

let dataCadangan2 = { ...dataCadangan };
dataCadangan2.firstName = "NANANG";

let jobDesc = {
  ...biodata,
  firstName: "Kubil",
  role: "Trainer",
  corporate: "Pijar Camp",
};

console.log(biodata);
console.log(dataCadangan);
console.log(dataCadangan2);

// console.log(biodata);
// console.log(jobDesc);
// console.log({ ...biodata, ...jobDesc });
