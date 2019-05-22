import Api from "./Api";

function doRegister(params) {
  console.log(params);
  const res = Api.post("/register", params)
    .then(response => {
      console.log("response data", response);

      return response.data;
    })
    .catch(e => {
      return e;
    });

  return res;
}

export const RegisterService = { doRegister };
