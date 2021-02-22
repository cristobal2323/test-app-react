require("dotenv").config();

const config = {
  api: `http://${process.env.API}:${process.env.API_PORT}/`,
  //api: "http://localhost:88/",
  port: process.env.PORT || 8019,
  dominio: process.env.HOST || "http://dataon.cl:8019",
};

module.exports = config;
