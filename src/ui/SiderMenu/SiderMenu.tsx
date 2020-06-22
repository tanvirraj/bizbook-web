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
    <Menu theme="dark" mode="inline">
      <SubMenu key="sub2" title="Navigation Two">
        <Menu.Item key="5">Option 5</Menu.Item>
        <Menu.Item key="6">Option 6</Menu.Item>
        <SubMenu key="sub3" title="Submenu">
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
        </SubMenu>
      </SubMenu>
    </Menu>
  );
};

export default SiderMenu;
