import { IMenuItemType } from "../router/routerType";
import WalletScreen from "./WalletScreen";

/** Screen: Settings Wallet Page
 */
export const SETTINGS_WALLET_SCREEN: IMenuItemType = {
  id: "wallet",
  title: "Wallet",
  path: "/settings/wallet",
  component: WalletScreen,
};
