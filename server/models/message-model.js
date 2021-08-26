import Sequelize, { DataTypes } from "sequelize";
import db from "./_db";
const User = db.model("user");

class Message extends Sequelize.Model {
  static getAllWhereSender(senderId, to) {
    return Message.findAll({
      where: {
        [to || "fromId"]: senderId,
      },
      include: [
        {
          model: User,
          as: "to",
        },
        {
          model: User,
          as: "from",
        },
      ],
    });
  }

  truncateSubject(len, ps) {
    this.subject = this.subject.slice(0, len) + (ps ? "..." : "");
    return this;
  }
}
Message.init(
  {
    subject: {
      type: DataTypes.STRING,
      defaultValue: "No Subject",
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "message" }
);

export default Message;
