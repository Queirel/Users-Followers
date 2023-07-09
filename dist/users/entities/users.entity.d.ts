import { UsersProjectsEntity } from './usersProjects.entity';
import { FollowersEntity } from '../../followers/entities/followers.entity';
export declare class UsersEntity {
    id: string;
    username: string;
    password: string;
    followers: FollowersEntity;
    following: FollowersEntity;
    projectsIncludes: UsersProjectsEntity[];
}
