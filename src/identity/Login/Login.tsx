import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { RouteComponentProps } from "react-router";
import BrowserTitle from "ui/BrowserTitle";
import Form, { FormItem } from "ui/forms/Form";
import Button, { ExtendButtonType } from "ui/Button/Button";
import styles from "./Login.module.scss";
import { Input, Row, Checkbox } from "antd";
import { Link } from "react-router-dom";
import { PUBLIC_ROUTES } from "router/Router.config";

interface IProps extends RouteComponentProps {
  history: any;
}

class Login extends PureComponent<IProps> {
  handleSubmit = async (data: any) => {
    console.log("handleSubmit", data);
    try {
    } finally {
    }
  };
  render() {
    return (
      <>
        <BrowserTitle title="Login" />
        <Form onSubmitForm={this.handleSubmit}>
          <FormItem
            label="email"
            name="email"
            options={{
              rules: [
                { required: true, message: "email is required" },
                {
                  type: "email",
                  message: "invalid email",
                },
              ],
            }}
          >
            <Input />
          </FormItem>
          <FormItem
            label="Password"
            name="password"
            options={{
              rules: [
                {
                  required: true,
                  message: "password is required",
                },
              ],
            }}
          >
            <Input />
          </FormItem>
          <Row type="flex" justify="space-between" align="top">
            <FormItem
              className={styles.rememberMeFormItem}
              name="rememberMe"
              options={{
                valuePropName: "checked",
                initialValue: true,
              }}
            >
              <Checkbox className={styles.rememberMe}>remember me</Checkbox>
            </FormItem>

            <Link
              to={PUBLIC_ROUTES.FORGOT_PASSWORD_SCREEN.path}
              className={styles.linkForgot}
            >
              Forget Password
            </Link>
          </Row>
          <FormItem>
            <Button
              buttonType={ExtendButtonType.PRIMARY}
              htmlType="submit"
              className={styles.button}
              text="Submit"
            />
          </FormItem>
        </Form>
      </>
    );
  }
}

export default withRouter(Login);
