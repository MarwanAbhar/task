import axios from "axios";
import store from "../src/store/index";

var baseUrl = "https://reqres.in/api/"

const sendRequest = (
  requestType,
  endpoint,
  data = null,
  successCallback = null,
  errorCallback = null,
) => {
  var url = baseUrl + endpoint;
  
  var headers = {
    headers: {
      Authorization: "Bearer " + store.getters.getToken
    }
  };
  var requestObject = {
    get: axios.get,
    post: axios.post,
    delete: axios.delete,
    put: axios.put,
    patch: axios.patch
  };
  var request = null;
  if (data) {
    request = requestObject[requestType](url, data, headers);
  } else {
    request = requestObject[requestType](url, headers);
  }
  

  request
    .then(response => {
      if (successCallback) {
       successCallback(response)
      }
    })
    .catch(error => {
      if (errorCallback) {
        errorCallback(error);
      }
    })
};

export default sendRequest;

// export const HTTP = axios.create({
//   baseURL: `https://graph.microsoft.com/v1.0/users`,
//   headers: {
//     Authorization: 'Bearer ' + (store.getters.getUser.providerData ? store.getters.getUser.providerData.token:'')
//   }
// })