const express = require("express");
const router = express.Router();
const articles = require("../models/articles");

router.post("/articles", function(req, res) {
  let article = new articles(req.body);
  article.save()
    .then(article => {
      res.send(article);
    })
    .catch(function(err) {
      res.status(422).send("add failed");
    });
});

router.get("/articles", function(req, res) {
  articles.find(function(article) {
    res.json(article);
  });
});

router.get("/articles/:id", function(req, res) {
  articles.findById(req.params.id, function(article) {
    if (!article) {
      res.status(404).send("Not found");
    } else {
      res.json(article);
    }
  });
});

router.patch("/articles/:id", function(req, res) {
  articles.findByIdAndUpdate(req.params.id, req.body).then(function() {
    res.json("updated").catch(function(err) {
      res.status(422).send("update failed");
    });
  });
});

router.delete("/articles/:id", function(req, res) {
  articles
    .findByIdAndRemove(req.params.id)
    .then(function() {
      res.status(200).json("Deleted");
    })
    .catch(function(err) {
      res.status(422).send("Article delete failed");
    });
});

module.exports = router;