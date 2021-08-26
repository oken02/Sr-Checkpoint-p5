import Sequelize, { DataTypes } from "sequelize";
import db from "./_db";

class User extends Sequelize.Model {}
User.init(
  {
    email: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
          
      }
    }, 
  },
  { sequelize: db, modelName: "user" }
);

export default User;
