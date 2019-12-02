const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      // nasłuchiwanie gdy wejdziemy na sciezeke i wywołuje specjalną funkcję do tego. Jeżeli wpiszemy 'google' to passport wie ze ma się odwołać do GoogleStrategy
      scope: ["profile", "email"] // prosimy google o udostępnienie profilu uzytkownika
    })
  );

  app.get("/", (req, res) => {
    res.send({
      hello: "world"
    });
  });

  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });
};
