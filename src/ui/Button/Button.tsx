import React, { PureComponent } from "react";
import styles from "./Button.module.scss";
import cx from "classnames";
import { Link } from "react-router-dom";
import { Button as AntDesignButton } from "antd";
import { NativeButtonProps } from "antd/lib/button/button";

/**
 * Enum with all the button types.
 * @readonly
 * @enum {string}
 */
enum ExtendButtonType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
  DEFAULT = "default",
}

/**
 * Enum with all the button sizes.
 * @readonly
 * @enum {string}
 */
enum ExtendBUttonSize {
  XSMALL = "xsmall",
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
  DEFAULT = "default",
}

/**
 * Enum with all the button shapes.
 * @readonly
 * @enum {string}
 */
enum ButtonShape {
  CIRCLE = "circle",
  ROUND = "round",
}

/**
 * Enum with all the icon positions.
 * @readonly
 * @enum {string}
 */
enum IconPosition {
  LEFT = "left",
  RIGHT = "right",
}

interface IProps extends NativeButtonProps {
  /** Text shown as button title */
  text: any;
  /** Link associated with the button */
  link?: string;
  /** Icon shown before or after button text */
  icon?: any;
  /** Used to set button status if its disabled or not */
  disabled?: any;
  /** Class name attached with the button component */
  className?: any;
  /** Type of the button ex- Primary or Secondary */
  buttonType?: ExtendButtonType;
  /** Size of the button ex- small or large (default: large) */
  size?: any;
  /** Used to set icon position ex- left or right (default: left) */
  iconPosition?: IconPosition;
  /** Set to true if the button should not have a border (default: has border) */
  borderless?: boolean;
  /** Set to true if the button should have a transparent background (default: has background color) */
  transparent?: boolean;
  /** Call the function when user clicks the button */
  onClick?: () => void;
  loading?: boolean;
}

/**
 * Custom Ant Design button
 */
class Button extends PureComponent<IProps, any> {
  static defaultProps = {
    buttonType: ExtendButtonType.DEFAULT,
    size: ExtendBUttonSize.DEFAULT,
    iconPosition: IconPosition.LEFT,
    loading: false,
  };

  render() {
    const {
      text,
      link,
      icon,
      buttonType,
      size,
      disabled,
      iconPosition,
      className,
      borderless,
      transparent,
      onClick,
      loading,
      ...rest
    } = this.props;

    const classNames = cx(
      {
        [styles.primaryButton]: buttonType === ExtendButtonType.PRIMARY,
        [styles.secondaryButton]: buttonType === ExtendButtonType.SECONDARY,
        [styles.tertiaryButton]: buttonType === ExtendButtonType.TERTIARY,
        [styles.defaultButton]: buttonType === ExtendButtonType.DEFAULT,
        [styles.xsmallButton]: size === ExtendBUttonSize.XSMALL,
        [styles.smallButton]: size === ExtendBUttonSize.SMALL,
        [styles.mediumButton]: size === ExtendBUttonSize.MEDIUM,
        [styles.largeButton]: size === ExtendBUttonSize.LARGE,
        [styles.borderless]: borderless,
        [styles.transparentBg]: transparent,
      },
      className
    );

    const button = (
      <AntDesignButton
        className={classNames}
        disabled={disabled}
        onClick={onClick}
        loading={loading}
        {...rest}
      >
        <span className={styles.buttonContent}>
          {!loading && iconPosition === IconPosition.LEFT && icon}
          {text && (
            <span
              className={cx({
                [styles.iconLeft]: icon && iconPosition === IconPosition.LEFT,
                [styles.iconRight]: icon && iconPosition === IconPosition.RIGHT,
              })}
            >
              {text}
            </span>
          )}
          {!loading && iconPosition === IconPosition.RIGHT && icon}
        </span>
      </AntDesignButton>
    );

    return link ? <Link to={link}>{button}</Link> : button;
  }
}

export default Button;
export { ExtendButtonType, ExtendBUttonSize, ButtonShape, IconPosition };
