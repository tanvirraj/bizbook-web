import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import _values from "lodash/values";
import { PUBLIC_ROUTES } from "./Router.config";

const Router = () => {
  return (
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
};

export default Router;
