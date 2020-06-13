import React, { PureComponent } from "react";
import styles from "./AuthLayout.module.scss";
import { Row, Col, Card } from "antd";
import BizBookLogo from "ui/BizBookLogo/BizBookLogo";

class AuthLayout extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <Row className={styles.container} type="flex" justify="center">
        <Col>
          <Card className={styles.card}>
            <div className={styles.logoContainer}>
              <BizBookLogo className={styles.logo} />
            </div>
            <div className={styles.contentContainer}>{children}</div>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default AuthLayout;
