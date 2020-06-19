import axios from "axios";
import ENV from "api/config";
import qs from "query-string";

const AUTH_URL = ENV.AUTH_API_HOST;

/**
 * Logs user in and returns a user object, with access tokens among other things
 * @param username
 * @param password
 * @returns {object}
 */
export const login = async (username: string, password: string) => {
  const data = {
    username: username,
    password: password,
    grant_type: "password",
  };

  try {
    const user = await axios.post(AUTH_URL, qs.stringify(data));
    return user.data;
  } catch (error) {
    console.error(error);
  }
};
