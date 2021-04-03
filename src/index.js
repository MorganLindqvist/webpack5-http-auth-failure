const auth = require("http-auth");

const basic = auth.basic({
  realm: "Docker registry",
  file: __dirname + "/../htpasswd"
});
