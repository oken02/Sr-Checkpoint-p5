import express from "express";
import db from "../models";
const Message = db.model("message");
const User = db.model("user");

// Este router esta ya montado en /messages en server/app.js
const router = express.Router();

router.get("/to/:id", (req, res) => {
  Message.getAllWhereSender(req.params.id, "toId").then((messages) => {
    res.send(messages);
  });
});

router.get("/from/:id", (req, res) => {
  Message.getAllWhereSender(req.params.id).then((messages) => {
    res.send(messages);
  });
});

router.post("/", (req, res) => {
  Message.create(req.body).then((message) => {
    res.status(201).json(message);
  });
});

export default router;
