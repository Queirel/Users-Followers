import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { UserDTO, UserToProjectDTO, UserUpdateDTO, QuantityDTO } from '../dto/user.dto';
import { UsersEntity } from '../entities/users.entity';
import { UsersProjectsEntity } from '../entities/usersProjects.entity';
export declare class UsersService {
    private readonly userRepository;
    private readonly userProjectRepository;
    constructor(userRepository: Repository<UsersEntity>, userProjectRepository: Repository<UsersProjectsEntity>);
    createUser(body: any): Promise<any>;
    seedUser(body: QuantityDTO): Promise<string>;
    findUsers(): Promise<[UsersEntity[], number]>;
    findAllUsers(): Promise<UsersEntity[]>;
    findAlliUsers(): Promise<void>;
    firstFive(): Promise<any>;
    findUserById(id: string): Promise<UsersEntity>;
    relationToProject(body: UserToProjectDTO): Promise<UserToProjectDTO & UsersProjectsEntity>;
    findBy({ key, value }: {
        key: keyof UserDTO;
        value: any;
    }): Promise<UsersEntity>;
    updateUser(body: UserUpdateDTO, id: string): Promise<UpdateResult | undefined>;
    deleteUser(id: string): Promise<DeleteResult | undefined>;
    findUserByUsername(username: string): Promise<UsersEntity>;
}
