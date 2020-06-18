import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import BrowserTitle from "ui/BrowserTitle";
import Form, { FormItem } from "ui/forms/Form";
import Button, { ExtendButtonType } from "ui/Button/Button";
import Input, { InputType } from "ui/Input/Input";
import styles from "./Login.module.scss";
import { Row, Checkbox } from "antd";
import { Link } from "react-router-dom";
import { PUBLIC_ROUTES } from "router/Router.config";

interface IProps extends RouteComponentProps {
  history: any;
  /** Login function that calls the API and sets tokens */
  login: Function;
  /** Loading state from rematch that listens to the login function */
  loading: boolean;
}

class Login extends PureComponent<IProps> {
  handleSubmit = async (data: any) => {
    const { login } = this.props;
    try {
      await login(data.username, data.password);
    } finally {
    }
  };
  render() {
    return (
      <>
        <BrowserTitle title="Login" />
        <Form onSubmitForm={this.handleSubmit}>
          <FormItem
            label="Email"
            name="username"
            options={{
              rules: [{ required: true, message: "username is required" }],
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
            <Input type={InputType.PASSWORD} />
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

const mapState = (state: any) => ({
  loading: state.loading.effects.userModel.login,
});

const mapDispatch = (dispatch: any) => ({
  login: (username: string, password: string) =>
    dispatch.userModel.login({ username, password }),
});

const LoginWithRouter = withRouter(Login);
export default connect(mapState, mapDispatch)(LoginWithRouter);
