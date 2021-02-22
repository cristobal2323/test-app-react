const fileUpload = require("express-fileupload");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const cors = require("cors");
const Config = require("./controllers/config/index");

/* Routers */
const routes = require("./routes/index");
const home = require("./routes/home/");

const login = require("./routes/login/");

const app = express();
app.set("trust proxy", 1);

app.use(express.static(path.join(__dirname, "../client/build")));

app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

app.use(cors());
app.use(fileUpload());

app.use(
  cookieSession({
    name: "session",
    keys: ["llave-1"],
  })
);

app.use("/api/home", home.home);
app.use("/api/login", login.login);

app.use("/", routes);

app.listen(process.env.PORT || Config.port, () =>
  console.log(`Server has started. ${process.env.PORT || Config.port}`)
);
