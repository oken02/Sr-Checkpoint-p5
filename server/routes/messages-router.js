import express from 'express';
import db from '../models';
const Message = db.model('message');
const User = db.model('user');

// Este router esta ya montado en /messages en server/app.js
const router = express.Router();

router.get('/to/:recipientId', (req, res) => {

    Message.findAll(
        {
            where: {
                toId: req.params.recipientId
            },
            include: [{
                model: User,
                as: 'from'
            }, {
                model: User,
                as: 'to'
            }]
        }).then(user => res.send(user))
})

router.get('/from/:senderId', (req, res) => {

    Message.getAllWhereSender(req.params.senderId).then(user => res.send(user))
})

router.post('/', (req, res) => {
    Message.create(req.body).then(msj => res.status(201).send(msj))
})

export default router;