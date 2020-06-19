import * as authApi from "./authApi";
import { AuthHelper } from "./authHelper";

const INITIAL_STATE = { user: {} };

const userModel = {
  state: INITIAL_STATE,
  reducers: {
    /**
     * Set user
     * @payload: { user }
     */
    setSuccess: (state: Object, payload: any) => {
      return {
        ...state,
        user: payload.user,
      };
    },
  },
  effects: (dispatch: any) => ({
    async login(payload: { username: string; password: string }) {
      const { username, password } = payload;
      const user = await authApi.login(username, password);
      //Save the tokens in the cookie
      AuthHelper.saveTokens(user.access_token, user[".expires"]);

      // delete token from user, so it won't be stored in localstorage for security reasons
      delete user.token;
      dispatch.userModel.setSuccess({ user });
    },
  }),
};

export default userModel;
