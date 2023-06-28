import { QuantityDTO } from '../../users/dto/user.dto';
import { FollowersService } from '../services/followers.service';
import { FollowersEntity } from '../entities/followers.entity';
export declare class FollowersController {
    private readonly followersService;
    constructor(followersService: FollowersService);
    seedFollowers(body: QuantityDTO): Promise<string>;
    createFollower(body: FollowersEntity): Promise<void>;
    findFollowers(): Promise<FollowersEntity[]>;
}
