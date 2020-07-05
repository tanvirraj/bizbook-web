import * as productApi from "./productApi";

const INITIAL_STATE = { productList: {} };

const productModel = {
  state: INITIAL_STATE,
  reducers: {
    setSuccess: (state: any, payload: any) => {
      return {
        ...state,
        productList: payload,
      };
    },
  },

  effects: (dispatch: any) => ({
    async getProducts(payload: any) {
      console.log("action");
      const response = await productApi.getProducts(payload);
      const productList = response.item1;
      dispatch.productModel.setSuccess(productList);
    },
  }),
};

export default productModel;
