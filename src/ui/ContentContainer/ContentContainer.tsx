// @flow

import React, { PureComponent } from "react";

import cx from "classnames";
import styles from "./ContentContainer.module.scss";

type Props = {
  /** optional search bar section above the header */
  title?: any;
  /** Components to go to the left side of the header */
  headerLeft?: any;
  /** Components to go to the middle of the header */
  headerMiddle?: any;
  /** Components to go to the right side of the header */
  headerRight?: any;
  /** Children will contain other components like table */
  children: any;
  /** Classname which will be attached with header */
  className?: string;
};

/**
 * container component that can house the search bar,
 * the action buttons, the pagination and the table.
 */
class ContentContainer extends PureComponent<Props> {
  render() {
    const {
      title,
      headerLeft,
      headerMiddle,
      headerRight,
      children,
      className,
    } = this.props;
    return (
      <div className={styles.contentContainer}>
        <div className={cx(styles.header, className)}>
          {title && <div className={styles.title}>{title}</div>}
          <div className={styles.headerLeft}>{headerLeft}</div>
          <div className={styles.headerMiddle}>{headerMiddle}</div>
          <div className={styles.headerRight}>{headerRight}</div>
        </div>
        {children}
      </div>
    );
  }
}

export default ContentContainer;
