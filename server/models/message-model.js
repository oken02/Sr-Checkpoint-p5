import Sequelize from 'sequelize';
import db from './_db';
const User = db.model('user');

const Message = db.define('message', {
    subject: {
        type: Sequelize.STRING,
        defaultValue: 'No Subject'
    },
    body:{
        type: Sequelize.STRING,
        allowNull: false
    }
});
Message.prototype.truncateSubject = function (length, boolean) {
    var carlos= this.body
    return {body: carlos,subject: boolean?this.subject.slice(0, length)+"...":this.subject.slice(0, length)}
}
Message.getAllWhereSender = function (id) {
    return this.findAll({
        where: {
            fromId: id,
        }, include: [
            { model: User, as: 'to'},
            { model: User, as: 'from' }
        ]
    })
    
}
export default Message;