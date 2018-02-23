import Sequelize from 'sequelize';
import db from './_db';
const User = db.model('user');

const Message = db.define('message', {
    subject: {
        type: Sequelize.STRING,
        defaultValue: 'No Subject'
    },
    body: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Message.getAllWhereSender = function (userid) {
    return Message.findAll(
        {
            where: {
                fromId: userid
            },
            include: [{
                model: User,
                as: 'from'
            }, {
                model: User,
                as: 'to'
            }]

        }).then(user => user)
}

Message.prototype.truncateSubject = function (num, isDot) {
    if (isDot) {
        var truncateSubject = ''
        for (var i = 0; i < num; i++) {
            truncateSubject += this.subject[i]
        }
        return Message.build({
            from: this.fromId,
            to: this.toId,
            subject: truncateSubject + '...',
            body: this.body
        })
    }
    var truncateSubject = ''
    for (var i = 0; i < num; i++) {
        truncateSubject += this.subject[i]
    }
    return Message.build({
        from: this.fromId,
        to: this.toId,
        subject: truncateSubject,
        body: this.body
    })
}

export default Message;