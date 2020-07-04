import axios, { AxiosRequestConfig } from "axios";
import { Endpoints, ResponseStatus } from "api/apiConst";
import { AuthHelper } from "../identity/authHelper";
import ENV from "./config";

/** Excluded endpoints for authorization */
const anonymousEndpoints = [Endpoints.USERS_LOGIN];

/**
 * Adds autherization headers to API calls
 * @param {AxiosRequestConfig} request
 */
const authInterceptor = async (request: AxiosRequestConfig) => {
  const isAnonymous = anonymousEndpoints.includes(request.url || "");

  const { accessToken, expireAt } = AuthHelper.getTokens();

  console.log("expireAt", expireAt);
  console.log("accessToken", accessToken);

  if (isAnonymous) {
    return request;
  } else if (request.url === Endpoints.USERS_LOGOUT && accessToken) {
    request.headers["Authorization"] = `Bearer ${accessToken}`;
    return request;
  } else if (!accessToken) {
    AuthHelper.logout();
    return Promise.reject(ResponseStatus.UNAUTHORIZED);
  }

  request.headers["Authorization"] = `Bearer ${accessToken}`;
  //const header = request.headers["Authorization"];

  // if (header && header.startsWith("Bearer")) {
  //   // Check if access token has expired
  //   if (new Date(expireAt) <= new Date()) {
  //     // Try and refresh the access token
  //     await AuthHelper.refreshToken().then(() => {
  //       const { accessToken } = AuthHelper.getTokens();
  //       request.headers["Authorization"] = `Bearer ${accessToken}`;
  //     });
  //   }
  // }

  return request;
};

/** Setup an API instance */
export const api = axios.create({
  baseURL: ENV.API_HOST,
  headers: {
    "Content-Type": "application/json",
  },
});

/** Add interceptor */
api.interceptors.request.use(authInterceptor);
