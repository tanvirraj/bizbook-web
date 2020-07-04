import * as productApi from "./productApi";

const INITIAL_STATE = { productList: {} };

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
        productList: payload.products,
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
    async getProducts(payload: any) {
      const productList = await productApi.getProducts(payload);
      console.log("productList", productList);
    },
  }),
};

export default userModel;
