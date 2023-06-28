import { ACCESS_LEVEL, ROLES } from 'src/constants/roles';
import { ProjectsEntity } from 'src/projects/entities/projects.entity';
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
    role: ROLES;
}
export declare class UserToProjectDTO {
    user: UsersEntity;
    project: ProjectsEntity;
    accessLevel: ACCESS_LEVEL;
}
export declare class QuantityDTO {
    quantity: number;
}
