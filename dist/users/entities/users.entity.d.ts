import { IUser } from '../../interfaces/user.interface';
import { BaseEntity } from '../../config/base.entity';
import { UsersProjectsEntity } from './usersProjects.entity';
import { FollowersEntity } from '../../followers/entities/followers.entity';
export declare class UsersEntity extends BaseEntity implements IUser {
    username: string;
    password: string;
    followers: FollowersEntity;
    following: FollowersEntity;
    projectsIncludes: UsersProjectsEntity[];
}
