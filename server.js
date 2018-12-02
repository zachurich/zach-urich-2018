const next = require("next");
const express = require("express");
const bodyParser = require("body-parser");
const contactMailer = require("./contactMailer");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  const port = process.env.PORT || 3000;
  server.use(bodyParser.json());

  // Handle post detail page routes
  server.get("/writing/:slug", (req, res) => {
    const params = { slug: req.params.slug };
    return app.render(req, res, `/post`, params);
  });

  // Handle contact form submissions
  server.post("/api/contact", (req, res) => {
    const { name, email, inquiry } = req.body;
    contactMailer({
      email,
      name,
      text: inquiry
    })
      .then(() => {
        res.send({
          msg: "Submitted!",
          error: false
        });
      })
      .catch(err => {
        res.send({
          msg: "Something went wrong...",
          error: true
        });
      });
  });

  // Handle all pages
  server.get("*", (req, res) => {
    const params = req.query;
    if (params.contact) {
      res.redirect("/"); // redirect if /contact is accessed directly
    }
    return handle(req, res);
  });

  server.listen(port || 3000, err => {
    if (err) throw err;
    console.log(`${"😀"}  Ready on http://localhost:${port}`);
  });
});
