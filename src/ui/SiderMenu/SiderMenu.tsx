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
  // const getSubMenuOpenKey = (location: any) => {
  //   //get submenu key from location path
  //   return location.match(/[/]\w*/)[0];
  // };

  // const getMenuOpenKey = (path: any) => {
  //   const location = path.match(/^\/.[^/]+\/.[^0-9/]+\w/g);
  //   return location == null ? path.match(/[/]\w*/)[0] : location[0];
  // };
  return (
    // <Menu
    //   theme="dark"
    //   mode="inline"
    //   selectedKeys={[getMenuOpenKey(location.pathname)]}
    //   defaultOpenKeys={[getSubMenuOpenKey(location.pathname)]}
    // >
    //   {siderMenu.map(item =>
    //     item.subMenuItems ? (
    //       <SubMenu
    //         key={item.path}
    //         title={
    //           <span>
    //             <Icon type={item.icon} />
    //             <span className={styles.menuItem}>{item.title}</span>
    //           </span>
    //         }
    //       >
    //         {item.subMenuItems.map(subItem => (
    //           <MenuItem key={getMenuOpenKey(subItem.path)}>
    //             <Link to={subItem.path}>
    //               <span className={styles.menuItem}>{subItem.title}</span>
    //             </Link>
    //           </MenuItem>
    //         ))}
    //       </SubMenu>
    //     ) : (
    //       <MenuItem key={getSubMenuOpenKey(item.path)}>
    //         <Link to={item.path}>
    //           <Icon type={item.icon} />
    //           <span className={styles.menuItem}>{item.title}</span>
    //         </Link>
    //       </MenuItem>
    //     )
    //   )}
    // </Menu>
    <Menu
      //onClick={this.handleClick}
      theme="dark"
      //defaultSelectedKeys={["1"]}
      //defaultOpenKeys={["sub1"]}
      mode="inline"
    >
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
