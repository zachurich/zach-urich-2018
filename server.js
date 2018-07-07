const next = require("next");
const express = require("express");
const bodyParser = require('body-parser')
const contactMailer = require('./contactMailer')

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  const port = process.env.PORT || 3000;
  server.use(bodyParser.json())

  // Handle post detail page routes
  server.get("/writing/:slug", (req, res) => {
    const params = { slug: req.params.slug };
    return app.render(req, res, `/post`, params);
  });

  server.get("*", (req, res) => {
    const params = req.query;
    if (params.contact) {
      res.redirect("/");
    }
    return handle(req, res);
  });

  server.post('/api/contact', (req, res) => {
    console.log(req.body)
    const { name, email, inquiry } = req.body;
    contactMailer({
      email, 
      name, 
      text: inquiry
    }).then(() => {
      console.log('Submitted!');
      res.send('Submitted!');
    }).catch((err) => {
      console.log(err);
      res.send(err);
    })
  })

  server.listen(port || 3000, err => {
    if (err) throw err;
    console.log(`${"😀"}  Ready on http://localhost:${port}`);
  });
});
