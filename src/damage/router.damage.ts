import { IMenuItemType } from "../router/routerType";
import DamageScreen from "./DamageScreen";

/** Screen: Settings Damage Page
 */
export const SETTINGS_DAMAGE_SCREEN: IMenuItemType = {
  id: "damage",
  title: "Damage",
  path: "/settings/damage",
  component: DamageScreen,
};
