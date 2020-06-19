/** Private route imports */
import * as DASHBOARD from "dashboard/router.dashboard";

/** Public route imports */
import * as AUTH_ROUTES from "../identity/router.authentication";

/** Private Routes */
export const PRIVATE_ROUTES = {
  ...DASHBOARD,
};

/** Public Routes */
export const PUBLIC_ROUTES = { ...AUTH_ROUTES };

/** SiderMenu Items */
export const SIDER_MENU = [];
