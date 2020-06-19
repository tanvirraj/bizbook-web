import axios from "axios";
import ENV from "./config";

/** Setup an API instance */
export const api = axios.create({
  baseURL: ENV.API_HOST,
  headers: {
    Application: "nplanner-web-v1",
    "Content-Type": "application/json",
  },
});
