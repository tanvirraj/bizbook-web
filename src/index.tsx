import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "ui/antd-global-overwrites.scss";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import { Provider } from "react-redux";
import store from "./redux/store";
import { getPersistor } from "@rematch/persist";
import { PersistGate } from "redux-persist/integration/react";
import * as serviceWorker from "./serviceWorker";
import { AppContainer } from "react-hot-loader";

/**
 * Turns on hot reloading. This is if hot reloading is available.
 */
const { hot } = module as any;
if (hot) {
  hot.accept();
}

const persistor = getPersistor();
const element = document.getElementById("root");
if (!element) throw new Error("Couldn't find element with id root");

/** Before the app is rendered we can perform some actions */
const onBeforeLift = async () => {
  // Get the store after loading store from offline
  //const state = store.getState();
  // // Check if the user has a valid token
  // if (UserHelper.isAuthenticated()) {
  //   // Check if the user data has been removed
  //   if (isEmpty(state.userModel.user)) {
  //     // then remove token and clean up
  //     UserHelper.logout();
  //   } else {
  //     // Otherwise let's fetch the latest user data
  //     UserHelper.fetchUser();
  //   }
  // }
};

const renderApp = (
  <AppContainer>
    <Provider store={store}>
      <PersistGate
        loading={<h1>loading</h1>}
        onBeforeLift={onBeforeLift}
        persistor={persistor}
      >
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </AppContainer>
);

ReactDOM.render(renderApp, element);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
