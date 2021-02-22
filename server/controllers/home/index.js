const axios = require("axios");
const Config = require("../config/index");

async function getHome(req, res) {
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character`,
      {
        params: {},
        headers: {
          accept: "application/json;",
          "Content-Type": "application/json;charset=UTF-8",
          Authorization: `Bearer ${req.session.token}`,
        },
      }
    );
    const status = response.status;
    const data = response.data;

    return res.status(status).send(data);
  } catch (error) {
    return res.status(401).send({});
  }
}

module.exports = {
  getHome,
};
