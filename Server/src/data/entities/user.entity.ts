const SequelizeLib = require("sequelize-ibmi");
export function UserEntity(sequelize: any) {
    const table = sequelize.define("user", {
        UserName: {
          type: SequelizeLib.STRING
        },
        Password: {
          type: SequelizeLib.STRING
        },
        IsActiveated: {
          type: SequelizeLib.INTEGER
        },
    });
    return table;
}