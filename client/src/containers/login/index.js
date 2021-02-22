import React from "react";

/* Compnents */
import Form from "../../components/login/form";

/* Style */
import LoginStyle from "../../assets/styles/Login.module.scss";

/*  Language */
import { IntlProvider } from "react-intl";

import messages_es from "../../translate/es";
import messages_en from "../../translate/en";

const messages = {
  es: messages_es,
  en: messages_en,
};
let language = navigator.language.split(/[-_]/)[0];

if (language !== "es" && language !== "en") {
  language = "en";
}

const Login = () => {
  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <section className={LoginStyle.container}>
        <div className={LoginStyle.form}>
          <Form />
        </div>
      </section>
    </IntlProvider>
  );
};

export default Login;
