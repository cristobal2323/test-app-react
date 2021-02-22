import React from "react";
import PropTypes from "prop-types";
import { withRouter, Switch, Route } from "react-router-dom";

import Login from "../login";
import Home from "../home";

const Main = ({ location }) => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Home} />
        <Route path="*" component={Home} />
      </Switch>
    </div>
  );
};

Main.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default withRouter(Main);
