import React, { Component } from "react";
import { Form as AntdForm } from "antd";
import { FormComponentProps } from "antd/es/form";
import { WrappedFormUtils } from "antd/es/form/Form";

export type FormContextProps = Pick<
  WrappedFormUtils,
  "getFieldDecorator" | "setFieldsValue" | "getFieldValue"
>;

const FormContext = React.createContext<FormContextProps>({
  getFieldDecorator: () => (node: any) => node,
  setFieldsValue() {},
  getFieldValue(): any {},
});

interface IProps extends FormComponentProps {
  /** Submit callback function */
  onSubmitForm: (values: any) => void;
  /** Form fields */
  children: React.ReactNode;
}

/**
 * Custom Ant Design Form
 */
class Form extends Component<IProps> {
  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const { form, onSubmitForm } = this.props;
    e.preventDefault();

    form.validateFields((err: any, values: any) => {
      if (!err) {
        onSubmitForm(values);
      }
    });
  };

  render() {
    const {
      children,
      form: { getFieldDecorator, setFieldsValue, getFieldValue },
      onSubmitForm,
      ...rest
    } = this.props;

    return (
      <AntdForm layout="vertical" onSubmit={this.handleSubmit} {...rest}>
        <FormContext.Provider
          value={{
            getFieldDecorator,
            setFieldsValue,
            getFieldValue,
          }}
        >
          {children}
        </FormContext.Provider>
      </AntdForm>
    );
  }
}

export default AntdForm.create<IProps>()(Form);
export { FormContext, Form as FormElement };
export { default as FormItem } from "./FormItem";
