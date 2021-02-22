import React, { useState } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";

/* Component */
import { Form, Button, Alert } from "react-bootstrap";

/* Actions  */
import { getLogin } from "../../actions/login";

const FormLogin = (props) => {
  /*  Use  states  */
  const [form, setForm] = useState({
    user: "",
    pass: "",
  });

  /*  User Select from redux  */
  const state = useSelector((state) => state.login);
  const dispatch = useDispatch();

  /*  Function for inputs  */
  const handleChange = (event) => {
    event.persist();
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  /*  Post  Login  */
  const postLogin = (event) => {
    event.preventDefault();
    dispatch(
      getLogin({
        provider: "cliente",
        cliente: { login: form.user, password: form.pass },
      })
    );
  };

  /* Local store */
  let auth = localStorage.getItem("auth");
  let ruta = "/home";
  auth = auth === "true";

  return auth ? (
    <div data-testid="form">
      <Redirect to={ruta} />
    </div>
  ) : (
    <div data-testid="form">
      <h2>
        <FormattedMessage id="LogIn" />
      </h2>
      <Form onSubmit={!state.loading ? postLogin : null}>
        <Form.Group controlId="email">
          <FormattedMessage id="WriteYourEmail">
            {(msg) => (
              <Form.Control
                value={form.user}
                onChange={(e) => handleChange(e)}
                name={"user"}
                autoComplete="username"
                type="text"
                placeholder={msg}
              />
            )}
          </FormattedMessage>
        </Form.Group>
        <Form.Group controlId="pass">
          <FormattedMessage id="WriteYourPass">
            {(msg) => (
              <Form.Control
                value={form.pass}
                onChange={(e) => handleChange(e)}
                name={"pass"}
                autoComplete="current-password"
                type="password"
                placeholder={msg}
              />
            )}
          </FormattedMessage>
        </Form.Group>

        <span className="recover--line" />
        <div className="module--loginForm_boxButton">
          <Button disabled={state.loading} type="submit">
            {state.loading ? (
              <FormattedMessage id="Loading" />
            ) : (
              <FormattedMessage id="LogIn" />
            )}
          </Button>
        </div>
      </Form>
      {state.status === 401 && (
        <Alert variant={"danger"} className="top center">
          <FormattedMessage id="WrongUsernameOrPassword" />
        </Alert>
      )}
      {state.status === 501 && (
        <Alert variant={"danger"} className="top center">
          <FormattedMessage id="WrongUsernameOrPassword" />
        </Alert>
      )}
    </div>
  );
};

FormLogin.propTypes = {
  state: PropTypes.object,
};

export default FormLogin;
