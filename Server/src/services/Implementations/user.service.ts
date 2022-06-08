import { UsersRepository } from "../../repositories";
import { IUsersService } from "../Interfaces";
export class UserService implements IUsersService {
  async findOne(id: number): Promise<any> {
    return `User number ${id}`;
  }
}
