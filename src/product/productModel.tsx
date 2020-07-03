const INITIAL_STATE = { user: {} };

const userModel = {
  state: INITIAL_STATE,
  reducers: {
    /**
     * Set user
     * @payload: { user }
     */
    setSuccess: (state: any, payload: any) => {
      return {
        ...state,
        user: payload.user,
      };
    },
    /**
     * Log out the user
     * @payload: { }
     */
    clear(state: any, payload: any) {
      return INITIAL_STATE;
    },
  },
  effects: (dispatch: any) => ({
    async login(payload: { username: string; password: string }) {},
  }),
};

export default userModel;
