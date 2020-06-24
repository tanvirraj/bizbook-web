import React, { FunctionComponent } from "react";
//import styles from "./SideMenu.module.scss";
import { Menu } from "antd";

import { IMenuItemType } from "../../router/routerType";

const { SubMenu } = Menu;

interface Props {
  /** List of sider menu items */
  siderMenu: IMenuItemType[];
}

/**
 * Main Layout Sider Menu
 */
const SiderMenu: FunctionComponent<Props> = ({ siderMenu }) => {
  return (
    <Menu mode="inline">
      <Menu.Item key="2">Navigation Two</Menu.Item>
      <SubMenu key="sub1" title="Navigation Two">
        <Menu.Item key="3">Option 3</Menu.Item>
        <Menu.Item key="4">Option 4</Menu.Item>
        <SubMenu key="sub1-2" title="Submenu">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
        </SubMenu>
      </SubMenu>
    </Menu>
  );
};

export default SiderMenu;
