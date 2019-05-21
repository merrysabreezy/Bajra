import { Api } from "./Api";

function doRegister(params) {
  // console.log("paraaa", params);
  const res = Api.post("register", params)
    .then(response => {
      console.log("trans", response);
      return response.data;
    })
    // .then(ApiUtils.checkStatus(response))
    .catch(function(e) {
      let error = "Network Failed";
      return error;
    });
  return res;
}

export const RegisterService = { doRegister };
