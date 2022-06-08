// ASYNC
const myFunc1 = () => {
  setTimeout(() => {
    console.log("halllo 1");
  }, 2000);
};

const myFunc2 = () => {
  console.log("halllo 2");
};

const myFunc3 = () => {
  console.log("halllo 3");
};


// CALLBACK ASYNC
const myFunc4 = (name, callback) => {
  if (name === "bilkis") {
    callback("hai kubil");
  } else {
    callback(`hai ${name}`);
  }
};

const myFunc5 = (name) => {
  console.log(name);
};

setTimeout(() => myFunc4("Bilkis", myFunc5), 3000);
myFunc1();
myFunc2();
myFunc3();
