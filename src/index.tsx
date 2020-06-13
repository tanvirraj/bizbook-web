import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import * as serviceWorker from "./serviceWorker";
import { AppContainer } from "react-hot-loader";

/**
 * Turns on hot reloading. This is if hot reloading is available.
 */
const { hot } = module as any;
if (hot) {
  hot.accept();
}

const element = document.getElementById("root");

if (!element) throw new Error("Couldn't find element with id root");

const renderApp = (
  <AppContainer>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </AppContainer>
);

ReactDOM.render(renderApp, element);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
