import { IMenuItemType } from "../router/routerType";
import ProductScreen from "./ProductScreen";

/** Screen: Settings Product Page
 */
export const SETTINGS_PRODUCT_SCREEN: IMenuItemType = {
  id: "product",
  title: "Product",
  path: "/settings/product",
  component: ProductScreen,
};
