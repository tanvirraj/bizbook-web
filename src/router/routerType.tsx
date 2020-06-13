export interface IMenuItemType {
  /** The id should be the same for paths that are showing the same component */
  id: string;
  /** The URL path for when the component should be rendered */
  path: string;
  /** Screen (or component) to show when navigating to the menu item */
  component?: any;
  /** Title of menu item for navbar or sidebar */
  title?: string;
  /** Icon of menu item for navbar or sidebar */
  icon?: string;
  /** Submenu items (max level 1) */
  subMenuItems?: IMenuItemType[];
}
