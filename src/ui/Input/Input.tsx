import React, { PureComponent } from "react";
import styles from "./Input.module.scss";
import { Input as AntInput } from "antd";
import cx from "classnames";
import { InputProps } from "antd/lib/input/Input";

const { Group: InputGroup } = AntInput;

/**
 * Enum with all the input sizes.
 * @readonly
 * @enum {string}
 */
enum InputSize {
  SMALL = "small",
  DEFAULT = "default",
}

/**
 * Enum with all the input types.
 * @readonly
 * @enum {string}
 */
enum InputType {
  TEXT = "text",
  NUMBER = "number",
  HIDDEN = "hidden",
  PASSWORD = "password",
  TEL = "tel",
}

export interface IProps extends InputProps {
  /** Addon text or Node after the input */
  addonAfter?: string | React.ReactNode;
  /** Addon text or Node before the input */
  addonBefore?: string | React.ReactNode;
  /** Size of the input */
  size: InputSize;
  /** Type of the input */
  type: InputType;
  /** Used to set input status if its disabled or not */
  disabled?: boolean;
  /** Class name attached with the input */
  className?: string;
  /** Prefix icon of the input */
  prefix?: React.ReactNode | string;
  isAddonSeparator?: boolean;
}

/**
 * Custom Ant Design Input
 */
class Input extends PureComponent<IProps, any> {
  static defaultProps = {
    size: InputSize.DEFAULT,
    type: InputType.TEXT,
    isAddonSeparator: true,
  };

  render() {
    const {
      addonBefore,
      addonAfter,
      type,
      size,
      className,
      disabled,
      prefix,
      isAddonSeparator,
      ...rest
    } = this.props;

    const classNames = cx(styles.inputStyle, className, {
      [styles.smallInput]: size === InputSize.SMALL,
      [styles.addonAfterStyle]: !!addonAfter,
      [styles.addonBeforeStyle]: !!addonBefore,
      [styles.hidden]: type === InputType.HIDDEN,
      [styles.disabled]: disabled,
      [styles.addonSeparator]: isAddonSeparator,
    });

    // if (type === InputType.NUMBER) {
    //   return (
    //     <InputNumber disabled={disabled} className={classNames} {...rest} />
    //   );
    // }

    return (
      <AntInput
        addonBefore={addonBefore}
        addonAfter={addonAfter}
        type={type}
        disabled={disabled}
        className={classNames}
        prefix={prefix}
        {...rest}
      />
    );
  }
}

export default Input;
export { InputSize, InputType, InputGroup };
