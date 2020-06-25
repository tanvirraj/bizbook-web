import { IMenuItemType } from "../router/routerType";
import WarehouseScreen from "./WarehouseScreen";

/** Screen: Settings Warehouse Page
 */
export const SETTINGS_WAREHOUSE_SCREEN: IMenuItemType = {
  id: "warehouse",
  title: "Warehouse",
  path: "/settings/warehouse",
  component: WarehouseScreen,
};
