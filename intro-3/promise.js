const axios = require("axios");

const myFunc4 = (url) => {
  return new Promise((resolve, reject) => {
    const request = axios.put(`https://jsonplaceholder.typicode.com/${url}`);

    if (request) {
      resolve(request);
    } else {
      reject(new Error("data not found"));
    }
  });
};

myFunc4("posts?userId=1")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
