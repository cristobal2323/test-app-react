const axios = require("axios");
const Config = require("../config/index");

async function postLogin(req, res, next) {
  try {
    /* Login */
    console.log(`${Config.api}authenticate`, req.body);
    const response = await axios.post(`${Config.api}authenticate`, req.body);
    const status = response.status;
    const data = response.data;

    /* Se controla las sesiones */
    req.session.token_client_ereport = data.auth_token;
    req.session.cliente_id = data.cliente_id;

    return res.status(status).send(data);
  } catch (err) {
    console.log(err);
    return res.status(401).send({ message: "Problem API" });
  }
}

module.exports = {
  postLogin,
};
