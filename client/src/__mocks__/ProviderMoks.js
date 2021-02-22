import React from "react";
import { createStore } from "redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import rootReducer from "../reducer/index";

const store = createStore(rootReducer);

/*  Language */
import { IntlProvider } from "react-intl";

import messages_es from "../translate/es";
import messages_en from "../translate/en";

const messages = {
  es: messages_es,
  en: messages_en,
};

const ProviderMock = (props) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <IntlProvider locale="en" messages={messages.en}>
          {props.children}
        </IntlProvider>
      </Switch>
    </Router>
  </Provider>
);

export default ProviderMock;
