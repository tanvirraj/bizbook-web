import { IMenuItemType } from "router/routerType";
import DashboardScreen from "dashboard/DashboardScreen";

export const DASHBOARD_SCREEN: IMenuItemType = {
  id: "dashboard",
  path: "/dashboard",
  component: DashboardScreen,
  title: "Dashboard",
  icon: "solution",
};
