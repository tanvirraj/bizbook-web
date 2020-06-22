import React, { Component } from "react";
import { Button, Col, Icon, Layout, Row } from "antd";
import styles from "./Header.module.scss";
import Dropdown from "ui/Dropdown";
import { connect } from "react-redux";
import { AuthHelper } from "identity/authHelper";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { RootState } from "../../redux/store";

const { Header: AntdHeader } = Layout;

interface IProps extends RouteComponentProps {
  /** Collapse sider indicator  */
  collapsed: boolean;
  /** Sider collapse handler */
  handleCollapsed: () => void;
  /** User Model */
  user: any;
}

/**
 * Layout Header
 */
class Header extends Component<IProps> {
  userMenu = [
    {
      label: "logOut",
      onItemClick: () => {
        AuthHelper.logout();
      },
    },
  ];

  render() {
    const { user, collapsed, handleCollapsed } = this.props;

    return (
      <AntdHeader className={styles.header}>
        <Row>
          <Col span={1}>
            <div>
              <Icon
                className={styles.trigger}
                type={collapsed ? "menu-unfold" : "menu-fold"}
                onClick={handleCollapsed}
              />
            </div>
          </Col>

          <Col span={2} offset={2} className={styles.logoutMenu}>
            <div>
              <Dropdown options={this.userMenu}>
                <Button className={styles.userButton}>
                  <Icon type="user" />
                  {!!user && user.name}
                </Button>
              </Dropdown>
            </div>
          </Col>
        </Row>
      </AntdHeader>
    );
  }
}

const mapState = (state: RootState) => ({
  user: state.userModel.user,
});

export default connect(mapState)(withRouter(Header));
