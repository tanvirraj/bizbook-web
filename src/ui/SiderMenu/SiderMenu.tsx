import React, { FunctionComponent } from "react";
import styles from "./SideMenu.module.scss";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { IMenuItemType } from "../../router/routerType";
const { SubMenu, Item: MenuItem } = Menu;

interface Props {
  /** List of sider menu items */
  siderMenu: IMenuItemType[];
}

/**
 * Main Layout Sider Menu
 */
const SiderMenu: FunctionComponent<Props> = ({ siderMenu }) => {
  const location = useLocation();

  const getTopMenuOpenkey = (location: any) => {
    return location.match(/[/]\w*/)[0];
  };

  const getSubMenuOpenKey = (path: any) => {
    const location = path.match(/^\/.[^/]+\/.[^0-9/]+\w/g);
    return location == null ? path.match(/[/]\w*/)[0] : location[0];
  };

  return (
    <Menu
      mode="inline"
      // Array with the keys of currently selected menu items
      // if there is any sub menu, this is actuall subteem's key
      selectedKeys={[getSubMenuOpenKey(location.pathname)]}
      // Array with the keys of default opened Top albel sub  menus
      // this is actuall meny key, if there is subitem
      // then which top lable menu will be selected this key define this
      defaultOpenKeys={[getTopMenuOpenkey(location.pathname)]}
    >
      {siderMenu.map(item =>
        item.subMenuItems ? (
          <SubMenu
            key={item.path}
            title={
              <span>
                <span className={styles.menuItem}>{item.title}</span>
              </span>
            }
          >
            {item.subMenuItems.map(subItem => (
              <MenuItem key={getSubMenuOpenKey(subItem.path)}>
                <Link to={subItem.path}>
                  <span className={styles.menuItem}>{subItem.title}</span>
                </Link>
              </MenuItem>
            ))}
          </SubMenu>
        ) : (
          <MenuItem key={getTopMenuOpenkey(item.path)}>
            <Link to={item.path}>
              <span className={styles.menuItem}>{item.title}</span>
            </Link>
          </MenuItem>
        )
      )}
    </Menu>
  );
};

export default SiderMenu;
