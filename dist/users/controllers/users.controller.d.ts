import { QuantityDTO, UserToProjectDTO, UserUpdateDTO } from '../dto/user.dto';
import { UsersService } from '../services/users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    registerUser(body: any): Promise<void>;
    seedUser(body: QuantityDTO): Promise<string>;
    findAllUsers(): Promise<import("../entities/users.entity").UsersEntity[]>;
    findUserById(id: string): Promise<import("../entities/users.entity").UsersEntity>;
    addToProject(body: UserToProjectDTO, id: string): Promise<UserToProjectDTO & import("../entities/usersProjects.entity").UsersProjectsEntity>;
    updateUser(id: string, body: UserUpdateDTO): Promise<import("typeorm").UpdateResult>;
    deleteUser(id: string): Promise<import("typeorm").DeleteResult>;
}
