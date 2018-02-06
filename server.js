const next = require("next");
const express = require("express");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  const port = process.env.PORT || 3000;

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

  server.listen(port || 3000, err => {
    if (err) throw err;
    console.log(`${"😀"}  Ready on http://localhost:${port}`);
  });
});
