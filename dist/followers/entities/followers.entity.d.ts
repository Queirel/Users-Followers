import { UsersEntity } from '../../users/entities/users.entity';
export declare class FollowersEntity {
    id: string;
    follower_id: string;
    following_id: string;
    followers: UsersEntity;
    following: UsersEntity;
}
