import React, { PureComponent } from "react";
import styles from "./DashboardContainer.module.scss";
import { Row, Col } from "antd";
import cx from "classnames";

type Props = {
  /** Title shown in the top left of the container */
  title: string;
  /** Tags shown next to the title (optional) */
  tags?: any;
  /** One or more components shown in the top right, use react fragment to pass in more components (optional) */
  actions?: any;
  /** Actual content shown below title and actions */
  children: any;
  /** Custom header class (optional) */
  headerClassName?: string;
};

/**
 * Dashboard container
 * A reusable component which wraps
 * contents with a title and a list of components
 */
class DashboardContainer extends PureComponent<Props> {
  render() {
    const { title, tags, actions, children, headerClassName } = this.props;

    return (
      <div className={styles.container}>
        <Row className={cx(styles.header, headerClassName)}>
          <Col span={14}>
            <Row type="flex" align="middle">
              <h1 className={styles.headerLeft}>{title}</h1>
              {tags && <div className={styles.headerTags}>{tags}</div>}
            </Row>
          </Col>
          {actions && (
            <Col span={10} className={styles.headerRight}>
              {actions}
            </Col>
          )}
        </Row>
        <Row>{children}</Row>
      </div>
    );
  }
}

export default DashboardContainer;
