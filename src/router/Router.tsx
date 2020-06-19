import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import _values from "lodash/values";
import { connect } from "react-redux";
import { PUBLIC_ROUTES, PRIVATE_ROUTES } from "./Router.config";
import { AuthHelper } from "identity/authHelper";

interface IProps {
  user: any;
}
class Router extends Component<IProps> {
  render() {
    const { user } = this.props;

    /** Only render routes that have a component */
    const filteredRoutes = _values(PRIVATE_ROUTES).filter(
      item => item.component
    );

    return user != null && AuthHelper.isAuthenticated() ? (
      <Switch>
        {filteredRoutes.map(item => (
          <Route
            key={item.id}
            exact
            path={item.path}
            component={item.component}
          />
        ))}
        <Redirect exact from="/" to={PRIVATE_ROUTES.DASHBOARD_SCREEN.path} />
      </Switch>
    ) : (
      <Switch>
        {_values(PUBLIC_ROUTES).map(item => (
          <Route
            key={item.id}
            exact
            path={item.path}
            component={item.component}
          />
        ))}
        <Redirect to={PUBLIC_ROUTES.LOGIN_SCREEN.path} />
      </Switch>
    );
  }
}

const mapState = (state: any) => ({
  user: state.userModel.user,
});

export default connect(mapState)(Router);
