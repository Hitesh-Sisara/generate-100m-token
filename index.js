var jwt = require("jsonwebtoken");
var uuid4 = require("uuid4");

var app_access_key = "65e211ee1d5fd749cd1f200e";
var app_secret =
  "hJMdeMQ28blMIV_CqRNx6b4zWGYqB3zs4Gm6LJg7hSML-klqB5KTEzq4XJPuC113AzGakVWPgelTZXMUNjmYPog6yzD0OyImTwVKnSNu0Zc9EG3SaQTJJoNMP9De-mub8lCj9yXVinhEmD2u2IHGTKWQ3R0y1Yrd0KU9qhFqAwk=";
var payload = {
  access_key: app_access_key,
  type: "management",
  version: 2,
  iat: Math.floor(Date.now() / 1000),
  nbf: Math.floor(Date.now() / 1000),
};

jwt.sign(
  payload,
  app_secret,
  {
    algorithm: "HS256",
    expiresIn: "365d",
    jwtid: uuid4(),
  },
  function (err, token) {
    console.log(token);
  }
);
