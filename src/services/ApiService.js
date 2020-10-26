import { Toast } from "../components/atoms";
import http from "../utils/http-common";

let headers = {
  "Content-type": "application/json",
  "accept-language": "it",
  "content-type": "application/json",
  "x-musement-currency": "EUR",
  "x-musement-version": "3.4.0",
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
