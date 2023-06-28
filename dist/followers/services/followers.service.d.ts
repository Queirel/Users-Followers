import { QuantityDTO } from 'src/users/dto/user.dto';
import { FollowersEntity } from '../entities/followers.entity';
import { Repository } from 'typeorm';
import { UsersEntity } from 'src/users/entities/users.entity';
export declare class FollowersService {
    private readonly followersRepository;
    private readonly userRepository;
    constructor(followersRepository: Repository<FollowersEntity>, userRepository: Repository<UsersEntity>);
    findFollowers(): Promise<FollowersEntity[]>;
    createFollower(body: FollowersEntity): Promise<FollowersEntity>;
    seedFollowers(body: QuantityDTO): Promise<string>;
}
