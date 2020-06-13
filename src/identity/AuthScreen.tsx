import React, { PureComponent } from "react";
import { RouteComponentProps } from "react-router-dom";
import { PUBLIC_ROUTES } from "../router/Router.config";
import AuthLayout from "./AuthLayout/AuthLayout";
import Login from "./Login/Login";

class AuthScreen extends PureComponent<RouteComponentProps> {
  render() {
    const { match } = this.props;

    return (
      <AuthLayout>
        {
          {
            [PUBLIC_ROUTES.LOGIN_SCREEN.path]: <Login />,
          }[match.path]
        }
      </AuthLayout>
    );
  }
}

export default AuthScreen;
