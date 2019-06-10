import express from 'express';
import db from '../models';
const User = db.model('user');
const Message = db.model('message');

// Este router esta ya montado en /useres en server/app.js
const router = express.Router();
router.get('/', function (req, res) {
    User.findAll()
    .then(Users => res.send(Users))
})

router.put('/:usersId', function (req, res) {
    var id = req.params.usersId
    User.update({email: req.body.email}, {where: {id: id}})
    .then(() => res.sendStatus(201))
})
export default router;