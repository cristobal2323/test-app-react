import React, { useEffect } from "react";

/* Redux */
import { useDispatch } from "react-redux";

/* Components */
import List from "../../components/home/list";

/* Actions */
import { resetLogin } from "../../actions/login";

/* Style */
import HomeStyle from "../../assets/styles/Home.module.scss";

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
const Home = (props) => {
  /* Login validation */
  const dispatch = useDispatch();
  useEffect(() => {
    let auth = localStorage.getItem("auth");
    auth = auth === "true";
    if (!auth) {
      props.history.push("/");
      dispatch(resetLogin());
    }
  });
  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <List style={HomeStyle} />
    </IntlProvider>
  );
};

export default Home;
