const axios = require("axios");
const Config = require("../controllers/config/index.js");

async function getNumbers(token) {
  try {
    const response = await axios.get(`${Config.api}nextnum.json`, {
      params: {},
      headers: {
        accept: "application/json;",
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    });
    const status = response.status;
    const data = response.data;

    return data;
  } catch (error) {
    return false;
  }
}

async function postNumbers(session, obj) {
  try {
    console.log(
      `${Config.api}nextnum.json?numero_id=${obj.id_numero}&servidor_id=${session.servidor_id}`
    );
    const response = await axios.post(
      `${Config.api}numserv.json?numero_id=${obj.id_numero}&servidor_id=${session.servidor_id}`,
      {},
      {
        headers: {
          accept: "application/json;",
          "Content-Type": "application/json;charset=UTF-8",
          Authorization: `Bearer ${session.token}`,
        },
      }
    );
    const status = response.status;
    const data = response.data;

    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
}

module.exports = (app, io) => {
  io.on("connect", (socket) => {
    socket.on("join", async ({ name }, callback) => {
      socket.join(socket.handshake.session.cliente_id);

      const dataNumber = await getNumbers(socket.handshake.session.token);
      socket.emit("number", dataNumber);

      let d = new Date();
      let n = d.getTime();
      socket.broadcast
        .to(socket.handshake.session.cliente_id)
        .emit("numberPhone", { update: n });

      callback();
    });

    socket.on("joinPhone", async ({ id_client }, callback) => {
      socket.join(id_client);
      console.log("conectado al canal", id_client);
      callback();
    });

    socket.on("nextNumber", async (obj, callback) => {
      const dataNumber2 = await postNumbers(socket.handshake.session, obj);

      const dataNumber1 = await getNumbers(socket.handshake.session.token);
      socket.emit("number", dataNumber1);

      let d = new Date();
      let n = d.getTime();
      socket.broadcast
        .to(socket.handshake.session.cliente_id)
        .emit("numberPhone", { update: n });

      callback();
    });
  });
};
