import express from "express";
import db from "../models";
const User = db.model("user");
const Message = db.model("message");

// Este router esta ya montado en /useres en server/app.js
const router = express.Router();

router.get("/", (req, res) => {
  User.findAll().then((users) => {
    res.json(users);
  });
});

router.put("/:id", (req, res) => {
  User.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).then((user) => {
    res.status(201).send(user);
  });
});


export default router;
