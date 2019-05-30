import Api from "./Api";

function doRegister(params) {
  console.log(params);
  const res = Api.post("/register", params)
    .then(response => {
      console.log("response data", response);

      return response.data;
    })
    .catch(error => {
      console.log("error", error);
    });

  return res;
}

export const RegisterService = { doRegister };
