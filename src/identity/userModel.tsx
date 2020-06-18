const INITIAL_STATE = { user: {} };

const userModel = {
  state: INITIAL_STATE,
  reducers: {},
  effects: () => ({
    async login(payload: { username: string; password: string }) {
      console.log("payload", payload);
    },
  }),
};

export default userModel;
