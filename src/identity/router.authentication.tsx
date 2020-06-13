import AuthScreen from "identity/AuthScreen";
import { IMenuItemType } from "router/routerType";

/** Screen: Login Page */
export const LOGIN_SCREEN: IMenuItemType = {
  id: "login",
  path: "/",
  component: AuthScreen,
};

/** Screen: Forgot Password Page */
export const FORGOT_PASSWORD_SCREEN: IMenuItemType = {
  id: "forgot-password",
  path: "/forgot-password",
  component: AuthScreen,
};
