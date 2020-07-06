import { IMenuItemType } from "router/routerType";
import ProductScreen from "./ProductScreen";
import ProductForm from "./ProductForm/ProductForm";
import { RouterParameters } from "router/routerConst";

/** Screen: Settings Product Page
 */
export const SETTINGS_PRODUCT_SCREEN: IMenuItemType = {
  id: "product",
  title: "Product",
  path: "/settings/product",
  component: ProductScreen,
};

export const PRODUCT_CREATE_SCREEN: IMenuItemType = {
  ...SETTINGS_PRODUCT_SCREEN,
  path: SETTINGS_PRODUCT_SCREEN.path + RouterParameters.CREATE,
  component: ProductForm,
};

export const PRODUCT_EDIT_SCREEN: IMenuItemType = {
  ...SETTINGS_PRODUCT_SCREEN,
  path:
    SETTINGS_PRODUCT_SCREEN.path +
    RouterParameters.EDIT +
    RouterParameters.ITEM_ID,
  component: ProductForm,
};
