import express from 'express';
import db from '../models';
const User = db.model('user');
const Message = db.model('message');

// Este router esta ya montado en /useres en server/app.js
const router = express.Router();


router.get('/', (req, res) => {
    User.findAll()
        .then(user => res.send(user))
})

router.put('/:id', (req, res) => {
    User.findById(req.params.id)
        .then((user) => {
            user.update(req.body).then(ok => res.status(201).send(ok))
        })
})

export default router;