import axios from "axios";
// import serviceWorker from "./serviceWorker";

var usersService = {
  endpoint: "https://api.remotebootcamp.dev/api/users",
};

var payload = { email: "user@google.com", password: "password" };

usersService.getCurrentUsers = () => {
  console.log("getCurrentUsers is firing");
  const config = {
    method: "GET",
    url: `${usersService.endpoint}/current`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

usersService.getUserLogin = () => {
  console.log("getUserLogin is firing");
  const config = {
    method: "GET",
    url: `${usersService.endpoint}/login/12345/fakeName/slackIdString`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

usersService.userRegister = (payload) => {
  console.log("userRegister is firing");
  console.log({ payLoad: payload });
  const config = {
    method: "POST",
    url: `${usersService.endpoint}/register`,
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

usersService.userLogout = () => {
  console.log("userLogout is firing");
  const config = {
    method: "GET",
    url: `${usersService.endpoint}/logout`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

usersService.userLogin = (payload) => {
  console.log("userLogin is firing");
  const config = {
    method: "POST",
    url: `${usersService.endpoint}/login`,
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

usersService.getInfoById = (idToFind) => {
  console.log("getInfoById is firing");
  const config = {
    method: "GET",
    url: `${usersService.endpoint}/${idToFind}`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

export { usersService }; // export all your calls here
