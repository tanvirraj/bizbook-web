import { IMenuItemType } from "router/routerType";
import ConfigScreen from "./ConfigScreen";
import { SETTINGS_PRODUCT_SCREEN } from "product/router.product";
import { SETTINGS_WAREHOUSE_SCREEN } from "warehouse/router.warehouse";
import { SETTINGS_DAMAGE_SCREEN } from "damage/router.damage";
import { SETTINGS_WALLET_SCREEN } from "wallet/router.wallet";

/** Screen: Settings Page */
export const SETTINGS_SCREEN: IMenuItemType = {
  id: "settings",
  title: "Settings",
  path: "/settings",
  icon: "setting",
};

/** Screen: Settings Config Page */
export const SETTINGS_CONFIG_SCREEN: IMenuItemType = {
  id: "config",
  title: "Config",
  path: SETTINGS_SCREEN.path + `/config`,
  component: ConfigScreen,
};

/** Settings subitems */
SETTINGS_SCREEN.subMenuItems = [
  SETTINGS_CONFIG_SCREEN,
  SETTINGS_PRODUCT_SCREEN,
  SETTINGS_WAREHOUSE_SCREEN,
  SETTINGS_DAMAGE_SCREEN,
  SETTINGS_WALLET_SCREEN,
];
