import { IRepository } from '../Interfaces';
const db = require("./../../data/entities/index")
export class UsersRepository{
    public async findOne(id: number): Promise<any> {
        const usersEntityDB = db.UserEntity;
        const result = await usersEntityDB.findOne(id);
        return result;
    }

    public async add(t: any): Promise<any> {
        const usersEntityDB = db.UserEntity;
        const result = await usersEntityDB.create(t);
        return result;
    }

    public async UpdateUserStatus(id: number, isActivated: number): Promise<any> {
        const usersEntityDB = db.UserEntity;
        const result = await usersEntityDB.update({ IsActiveated: isActivated }, { where: { id: id }  });
        return result;
    }

    public async findByUserName(userName: string): Promise<any> {
        
        const usersEntityDB = db.UserEntity;
        const result = await usersEntityDB.findAll( { where: { UserName: userName } });
        return result;
    }

}