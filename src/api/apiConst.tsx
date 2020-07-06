/** Private endpoint URLs */

const USERS_URL = "/users";

/**
 * Enum with all api endpoints
 * @readonly
 * @enum {string}
 */
export const Endpoints = Object.freeze({
  USERS_LOGIN: USERS_URL + "/login",
  USERS_LOGOUT: USERS_URL + "/logout",
  CREATE_PRODUCT: "/ProductDetail/Add",
  EDIT_PRODUCT: "/ProductDetail/Edit",
  PRODUCTS: "/ProductDetailQuery/Search",
  PRODUCT_DETAIL: "ProductDetailQuery/Detail",
  PRODUCT_CATEGORY: "/ProductCategoryQuery/Dropdown",
  PRODUCT_BRAND: "/BrandQuery/Dropdown",
});

/**
 * API response status codes enum
 * @readonly
 * @enum {number}
 */
export const ResponseStatus = Object.freeze({
  SUCCESS: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
});
