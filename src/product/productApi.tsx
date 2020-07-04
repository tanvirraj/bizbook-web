import { api } from "api/apiHelper";
import { Endpoints } from "api/apiConst";

/**
 * Get All the Product List
 */
export const getProducts = (params?: any) => {
  const url = Endpoints.PRODUCTS;

  // If params query exists remove all undefined values
  //params && UtilHelper.removeUndefined(params);

  console.log("params", params);

  return api
    .get(url, {
      params: { ...params },
    })
    .then((resp: any) => resp.data)
    .catch((err: any) => {
      throw err;
    });
};
