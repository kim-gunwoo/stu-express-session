const express = require("express");
const router = express.Router();
const template = require("../models/template");
const auth = require("../models/auth");

router.get("/", function (req, res) {
    const title = "Welcome";
    const description = "Hello, Node.js";
    const list = template.list(req.list);
    const body = `<h2>${title}</h2>${description}
                <img src="/images/hello.jpg" style="width:300px; display:block; margin-top:10px;">`;
    const control = `<a href="/topic/create">create</a>`;
    const html = template.HTML(
        title,
        list,
        body,
        control,
        auth.statusUI(req, res)
    );
    res.send(html);
});

module.exports = router;
