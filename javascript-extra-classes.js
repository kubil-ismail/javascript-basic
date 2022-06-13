const axios = require("axios");

const getData = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const request = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/1123123123`
      );

      if (request?.data?.length) {
        resolve(request.data);
      } else {
        reject("Data tidak di temukan");
      }
    } catch (error) {
      reject(error);
    }
  });
};

getData()
  .then((res) => console.log("res", res))
  .catch((error) => {
    // CONTOH 1
    let errorResponse;

    if (error.response && error.response.status) {
      errorResponse = error.response.status;
    } else {
      errorResponse = null;
    }

    console.log(errorResponse);

    // CONTOH 2
    console.log(
      error.response && error.response.status ? error.response.status : null
    );

    // CONTOH 3
    console.log(error?.response?.status ?? null);

    if (error?.response?.status === 404) {
      console.log("Url tidak valid");
    } else if (error?.response?.status === 401) {
      console.log("Token wajib di gunakan");
    } else {
      console.log(error ?? "Terjadi kesalahan dalam sistem");
    }
  });

const getData = async (success, failed) => {
  try {
    const request = await axios.get(
      `https://api.themoviedb.org/3/movie/550?api_key=f08bd8ca85032ec988e8d3e16fbb4726`
    );

    if (request?.data) {
      success(request?.data);
    } else {
      failed("Data tidak di temukan");
    }
  } catch (error) {
    failed(error);
  }
};

getData(
  (res) => {
    console.log("res", res);
  },
  (error) => {
    if (error?.response?.status === 404) {
      console.log("Url tidak valid");
    } else if (error?.response?.status === 401) {
      console.log("Token wajib di gunakan");
    } else {
      console.log(error ?? "Terjadi kesalahan dalam sistem");
    }
  }
);

let input = "1sdasdasdadads";

let validNumber = parseInt(input, 10);
let checkIsNumber =
  !(Boolean(input) && validNumber) &&
  !(typeof input === "number" || typeof input === "number");

if (checkIsNumber) {
  console.log(validNumber);
}
