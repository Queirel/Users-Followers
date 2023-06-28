import { BaseEntity } from '../../config/base.entity';
import { UsersEntity } from '../../users/entities/users.entity';
export declare class FollowersEntity extends BaseEntity {
    follower_id: string;
    following_id: string;
    followers: UsersEntity;
    following: UsersEntity;
}
