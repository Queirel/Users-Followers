import { ProjectsEntity } from '../../projects/entities/projects.entity';
import { UsersEntity } from '../entities/users.entity';
export declare class UserDTO {
    username: string;
    password: string;
}
export declare class UserUpdateDTO {
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    username: string;
    password: string;
}
export declare class UserToProjectDTO {
    user: UsersEntity;
    project: ProjectsEntity;
}
export declare class QuantityDTO {
    quantity: number;
}
