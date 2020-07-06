import { api } from "api/apiHelper";
import { Endpoints } from "api/apiConst";

/**
 * Get All the Product List
 */
export const getProducts = (params?: any) => {
  const url = Endpoints.PRODUCTS;

  // If params query exists remove all undefined values
  //params && UtilHelper.removeUndefined(params);

  return api
    .post(url, params)
    .then((resp: any) => resp.data)
    .catch((err: any) => {
      throw err;
    });
};

export const getCategory = () => {
  const url = Endpoints.PRODUCT_CATEGORY;
  const data = {
    isProductCategoryActive: true,
  };

  return api
    .post(url, data)
    .then((resp: any) => resp.data)
    .catch((err: any) => {
      throw err;
    });
};

export const getBrand = () => {
  const url = Endpoints.PRODUCT_BRAND;

  return api
    .post(url, {})
    .then((resp: any) => resp.data)
    .catch((err: any) => {
      throw err;
    });
};

/**
 * Create a  Product
 */
export const createProduct = (payload: any) => {
  const url = Endpoints.CREATE_PRODUCT;
  return api.post(url, payload).then(resp => {
    return resp.data;
  });
};

export const getProductDetailsById = (productId: any) => {
  return api
    .post(
      Endpoints.PRODUCT_DETAIL,
      {},
      {
        params: { id: productId },
      }
    )
    .then((resp: any) => resp.data)
    .catch((err: any) => {
      throw err;
    });
};

/**
 * Create a  Product
 */
export const editProduct = (product: any) => {
  const url = Endpoints.EDIT_PRODUCT;
  return api.put(url, product).then(resp => {
    return resp.data;
  });
};
