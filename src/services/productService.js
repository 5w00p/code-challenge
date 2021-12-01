import axios from "axios";
import React from "react";
// import serviceWorker from "./serviceWorker";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

var productService = {
  endpoint: "https://api.remotebootcamp.dev/api/entities/products",
};

// var payload = { email: "user@google.com", password: "password" };

function onAddSuccess(response) {
  console.log({ good: response });
  toast.success("Product was added.");
}

function onAddError(response) {
  console.log({ error: response });
  toast.error("Error on product add. Please check inputs and re-try.");
}

productService.getCurrProds = () => {
  console.log("getCurrProds is firing");
  const config = {
    method: "GET",
    url: `${productService.endpoint}`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

productService.getProdInfo = (prodId) => {
  console.log("getProdInfo is firing");
  const config = {
    method: "GET",
    url: `${productService.endpoint}/prodId`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

productService.addProduct = (payload) => {
  console.log("addProduct is firing");
  console.log({ productAdded: payload });
  const config = {
    method: "POST",
    url: `${productService.endpoint}`,
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

// usersService.userLogout = () => {
//   console.log("userLogout is firing");
//   const config = {
//     method: "GET",
//     url: `${usersService.endpoint}/logout`,
//     crossdomain: true,
//     headers: { "Content-Type": "application/json" },
//   };
//   return axios(config);
// };

// usersService.userLogin = (payload) => {
//   console.log("userLogin is firing");
//   const config = {
//     method: "POST",
//     url: `${usersService.endpoint}/login`,
//     data: payload,
//     crossdomain: true,
//     headers: { "Content-Type": "application/json" },
//   };
//   return axios(config);
// };

// usersService.getInfoById = (idToFind) => {
//   console.log("getInfoById is firing");
//   const config = {
//     method: "GET",
//     url: `${usersService.endpoint}/${idToFind}`,
//     crossdomain: true,
//     headers: { "Content-Type": "application/json" },
//   };
//   return axios(config);
// };

export { productService }; // export all your calls here
