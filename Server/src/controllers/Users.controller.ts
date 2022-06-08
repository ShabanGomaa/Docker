import { LoginRequestDto, LoginResponceDto, UserDto } from "../services/Dtos";
import { UserService } from "../services/Implementations/user.service";
import { IUsersService } from "../services/Interfaces";

export class UserController {
  async getOne(req: any): Promise<any> {
    let userService: IUsersService = new UserService();
    var id = req.query.id;
    let result = await userService.findOne(id);
    return result;
  }
}
