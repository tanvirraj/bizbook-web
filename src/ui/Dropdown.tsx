import React, { PureComponent } from "react";
import { Menu, Dropdown as AntDropdown, Icon, Button } from "antd";

const MenuItem = Menu.Item;

interface IDropdownOptionType {
  /** Text for item in dropdown */
  label: string;
  /** Callback for clicking item in dropdown */
  onItemClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

interface IProps {
  /** Text shown as dropdown title */
  text?: string;
  /** List of dropdown options  */
  options: IDropdownOptionType[];
  /** The trigger mode which executes the dropdown action */
  trigger?: Array<"click" | "hover" | "contextMenu">;
  /** CSS class for trigger button */
  triggerClass?: string;
  /** Trigger markup used instead of default button */
  children?: any;
}

/**
 * Custom Ant Design Dropdown
 */
class Dropdown extends PureComponent<IProps> {
  render() {
    const { text, options, triggerClass, children } = this.props;
    let { trigger } = this.props;

    if (!trigger) {
      trigger = ["click"];
    }

    const content = (
      <Menu>
        {options.map(option => (
          <MenuItem key={option.label}>
            <Button type="link" onClick={option.onItemClick}>
              {option.label}
            </Button>
          </MenuItem>
        ))}
      </Menu>
    );

    return (
      <AntDropdown overlay={content} trigger={trigger}>
        {children ? (
          children
        ) : (
          <Button className={triggerClass}>
            {text} <Icon type="down" />
          </Button>
        )}
      </AntDropdown>
    );
  }
}

export default Dropdown;
