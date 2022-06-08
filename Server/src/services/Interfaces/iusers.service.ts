export interface IUsersService {
  findOne(id: number): Promise<any>;
}
