import express from 'express';
import db from '../models';
const Message = db.model('message');
const User = db.model('user');

// Este router esta ya montado en /messages en server/app.js
const router = express.Router();

router.get("/to/:recipientId", function (req, res) {
    Message.findAll({where:{
        toId: req.params.recipientId
    }, include:[
        { model: User, as: 'to'},
        { model: User, as: 'from' }
    ]})
    .then(mes => res.send(mes))
})
router.get("/from/:senderId", function (req, res) {
    console.log(req.params.senderId)
    Message.getAllWhereSender(req.params.senderId)
    .then(mes => res.send(mes))
})
router.get("/from/:recipientId", function (req, res) {
    Message.findAll({where:{
        fromId: req.params.recipientId
    }})
    .then(mes => res.send(mes))
})

router.post("/", function (req, res) {
    const body = req.body
    console.log(body)
    Message.create(body)
    .then((mes) => res.status(201).send(mes))
})



export default router;