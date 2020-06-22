import React, { FunctionComponent, useState } from "react";
import { IMenuItemType } from "../../router/routerType";
import { Layout as AntdLayout } from "antd";
import Header from "../Header/Header";
import SiderMenu from "../SiderMenu/SiderMenu";
import styles from "./DefaultLayout.module.scss";

const { Sider, Content } = AntdLayout;

interface Props {
  /** List of menu items */
  siderMenu: IMenuItemType[];
}

/**
 * Default Layout with side menu, header and footer
 */
const DefaultLayout: FunctionComponent<Props> = ({ siderMenu, children }) => {
  /** Is sider collapsed */
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => setCollapsed(!collapsed);

  return (
    <AntdLayout className={styles.layout}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        width={256}
      >
        <div className={styles.logo}>{collapsed ? "B" : "Bizbook"}</div>
        <SiderMenu siderMenu={siderMenu} />
      </Sider>
      <AntdLayout>
        <Header collapsed={collapsed} handleCollapsed={toggle} />
        <Content className={styles.content}>{children}</Content>
      </AntdLayout>
    </AntdLayout>
  );
};

export default DefaultLayout;
