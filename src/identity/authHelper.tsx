import cookie from "react-cookies";
import store from "../redux/store";
// import * as authApi from "./authApi";
// import { message } from "antd";

const SESSION_TOKEN = "session-token";

export class AuthHelper {
  /**
   * Checks if the user is authenticated
   * @returns {boolean}
   */
  static isAuthenticated() {
    const { accessToken, expireAt } = AuthHelper.getTokens();
    return accessToken != null && expireAt != null;
  }

  /**
   * Logout user, i.e. clear and ivalidate tokens, and clear user model.
   */
  /**
   * Clean up as part of logging out the user
   */
  static logout() {
    AuthHelper.clearTokens();
    store.dispatch.userModel.clear();
  }

  /**
   * Save token in a cookie
   * @param {string} accessToken
   * @param {string} expireAt
   */
  static saveTokens(accessToken: string, expireAt: string) {
    const value = { accessToken, expireAt };
    cookie.save(SESSION_TOKEN, value, { path: "/" });
  }

  /**
   * Deletes the session cookie
   */
  static clearTokens() {
    cookie.remove(SESSION_TOKEN, { path: "/" });
  }

  /**
   * Loads token from session cookie
   * @returns {object}
   */
  static getTokens() {
    const value = cookie.load(SESSION_TOKEN);

    return {
      accessToken: value && value.accessToken,
      expireAt: value && value.expireAt,
    };
  }
}
