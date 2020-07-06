import * as productApi from "./productApi";

const INITIAL_STATE = {
  productList: [],
  categoryList: [],
  brandList: [],
  productDetails: {},
};

const productModel = {
  state: INITIAL_STATE,
  reducers: {
    getProductSuccess: (state: any, payload: any) => {
      return {
        ...state,
        productList: payload,
      };
    },
    getCategorySuccess: (state: any, payload: any) => {
      return {
        ...state,
        categoryList: payload,
      };
    },
    getBrandSuccess: (state: any, payload: any) => {
      return {
        ...state,
        brandList: payload,
      };
    },
    getProductDetailsByIdSuccess: (state: any, payload: any) => {
      return {
        ...state,
        productDetails: payload,
      };
    },
  },

  effects: (dispatch: any) => ({
    async getProducts(payload: any) {
      const response = await productApi.getProducts(payload);
      const productList = response.item1;
      dispatch.productModel.getProductSuccess(productList);
    },

    async getCategorylist() {
      const categoryList = await productApi.getCategory();
      dispatch.productModel.getCategorySuccess(categoryList.item1);
    },

    async getBrandlist() {
      const brandList = await productApi.getBrand();
      dispatch.productModel.getBrandSuccess(brandList.item1);
    },

    async createProduct(payload: any) {
      await productApi.createProduct(payload);
    },

    async editProduct(payload: any) {
      await productApi.editProduct(payload);
    },

    async getProductDetailsById(productId: any) {
      const productDetails = await productApi.getProductDetailsById(productId);
      dispatch.productModel.getProductDetailsByIdSuccess(productDetails);
    },
  }),
};

export default productModel;
