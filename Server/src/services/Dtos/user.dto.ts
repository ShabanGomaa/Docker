import { AutoMap } from "@automapper/classes";

export class UserDto{
    @AutoMap()
    UserName: string;

    @AutoMap()
    Password: string;

    @AutoMap()
    IsActiveated: number;
    

}