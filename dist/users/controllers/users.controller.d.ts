import { QuantityDTO, UserToProjectDTO, UserUpdateDTO } from '../dto/user.dto';
import { UsersService } from '../services/users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    registerUser(body: any): Promise<any>;
    seedUser(body: QuantityDTO): Promise<string>;
    findUsers(): Promise<[import("../entities/users.entity").UsersEntity[], number]>;
    findAllUsers(): Promise<import("../entities/users.entity").UsersEntity[]>;
    findAlliUsers(): Promise<void>;
    firstFive(): Promise<any>;
    findUserById(id: string): Promise<import("../entities/users.entity").UsersEntity>;
    addToProject(body: UserToProjectDTO, id: string): Promise<UserToProjectDTO & import("../entities/usersProjects.entity").UsersProjectsEntity>;
    updateUser(id: string, body: UserUpdateDTO): Promise<import("typeorm").UpdateResult>;
    deleteUser(id: string): Promise<import("typeorm").DeleteResult>;
}
