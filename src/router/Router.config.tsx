/** Private route imports */
import * as DASHBOARD from "dashboard/router.dashboard";
import * as SETTINGS_ROUTES from "settings/router.settings";
import * as PRODUCT_ROUTES from "product/router.product";
import * as WAREHOUSE_ROUTES from "warehouse/router.warehouse";
import * as DAMAGE_ROUTES from "damage/router.damage";
import * as WALLET_ROUTES from "wallet/router.wallet";

/** Public route imports */
import * as AUTH_ROUTES from "../identity/router.authentication";

/** Private Routes */
export const PRIVATE_ROUTES = {
  ...DASHBOARD,
  ...SETTINGS_ROUTES,
  ...PRODUCT_ROUTES,
  ...WAREHOUSE_ROUTES,
  ...DAMAGE_ROUTES,
  ...WALLET_ROUTES,
};

/** Public Routes */
export const PUBLIC_ROUTES = { ...AUTH_ROUTES };

/** SiderMenu Items */
export const SIDER_MENU = [
  DASHBOARD.DASHBOARD_SCREEN,
  SETTINGS_ROUTES.SETTINGS_SCREEN,
];
