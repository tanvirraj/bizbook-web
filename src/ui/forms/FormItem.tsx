import React, { PureComponent } from "react";
import { FormContext } from "./Form";
import { Form } from "antd";
import { GetFieldDecoratorOptions } from "antd/es/form/Form";
import { FormItemProps } from "antd/lib/form/FormItem";

interface IProps {
  /** Label of the input */
  label?: string;
  /** Label / input layout  */
  formItemLayout?: FormItemProps;
  /** Form field name */
  name?: string;
  /** Form field options (like validation) */
  options?: GetFieldDecoratorOptions;
  /** Pass in the input as a component that will have the value */
  children: React.ReactNode;
  /** Item has error */
  error?: boolean;
  /** Item has server/custom validation error*/
  errorMessage?: boolean;
  /** Class name */
  className?: string;
}

/**
 * Custom Ant Design FormItem
 */
class FormItem extends PureComponent<IProps> {
  static defaultProps = {
    error: false,
  };

  render() {
    const {
      label,
      formItemLayout,
      name,
      options,
      error,
      errorMessage,
      className,
      children,
    } = this.props;

    return (
      <FormContext.Consumer>
        {({ getFieldDecorator }) => (
          <Form.Item
            label={label}
            {...formItemLayout}
            {...(error ? { validateStatus: "error" } : {})}
            {...(errorMessage
              ? {
                  validateStatus: "error",
                  help: errorMessage,
                }
              : {})}
            className={className}
          >
            {name ? getFieldDecorator(name, options)(children) : children}
          </Form.Item>
        )}
      </FormContext.Consumer>
    );
  }
}

export default FormItem;
