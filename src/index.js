const auth = require("http-auth");

const basic = auth.basic({
  realm: "Domain",
  file: __dirname + "/../htpasswd"
});
