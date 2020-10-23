import { Toast } from "../components/atoms";
import http from "../utils/http-common";

let headers = {
  "Content-type": "application/json",
};

const handlerError = (err) => {
  Toast.notify("Si è verificato un errore", "error");
  return { hasError: true };
};

// GET
const get = (path) => {
  return http
    .get(path, {
      headers: headers,
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      handlerError(err);
    });
};

export default {
  get,
};
