import axios from "axios";

const Api = () =>
  axios.create({
    baseURL: "http://localhost:8149/api",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });

// const Api = () => {
//   const defaultOptions = {
//     baseURL: "http://localhost:8149/api",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json"
//     }
//   };

//   let api = axios.create(defaultOptions);
//   return api;
// };
export default Api();
