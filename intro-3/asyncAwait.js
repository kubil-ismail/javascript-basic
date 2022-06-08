const myFunc3 = (param) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (param) {
        case 2:
          resolve(true);
          break;
        default:
          reject(false);
      }
    }, 1000);
  });
};

const myFunc4 = () => {
  const request = {};

  if (request.test.test2) {
    return request;
  }
  // try {
  // } catch (error) {
  //   console.log("error");
  // }
};

myFunc4();
