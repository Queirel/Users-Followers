import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { QuantityDTO } from '../../users/dto/user.dto';
import { FollowersEntity } from '../entities/followers.entity';
import { AppDS } from '../../config/data.source';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from '../../users/entities/users.entity';
import { FollowerDTO } from '../dto/follower.dto';

@Injectable()
export class FollowersService {
  constructor(
    @InjectRepository(FollowersEntity)
    private readonly followersRepository: Repository<FollowersEntity>,
    @InjectRepository(UsersEntity)
    private readonly userRepository: Repository<UsersEntity>,
  ) {}

  public async findFollowers(): Promise<FollowersEntity[]> {
    return await this.followersRepository.find();
  }

  public async createFollower(body: FollowersEntity): Promise<FollowersEntity> {
    return await this.followersRepository.save(body);
  }

  //   public async createFollowers(body: QuantityDTO): Promise<FollowersEntity[]> {
  public async seedFollowers(body: QuantityDTO) {
    // try {
    const users = await this.userRepository.find();
    const userQuantity = users.length;
    // const userQuantity = 100;
    // const quantity = 20;
    const quantity = body.quantity;
    // const numeroAleatorio = Math.floor(Math.random() * 100);
    await AppDS.initialize();
    // const queryRunner = AppDS.createQueryRunner();
    // await queryRunner.query('TRUNCATE TABLE "followers" CASCADE');

    // await queryRunner.startTransaction();
    // const follower_id = Math.floor(Math.random() * userQuantity);
    // const following_id = Math.floor(Math.random() * userQuantity);
    const followArray = [];
    for (let xUser = 0; xUser < userQuantity; xUser++) {
      for (let xFollow = 0; xFollow < quantity; xFollow++) {
        const follow = {
          follower_id: users[xUser].id,
          following_id: users[Math.floor(Math.random() * userQuantity)].id,
        };
        followArray.push(follow);
        // await this.followersRepository.save(follow);
      }
    }

    await this.followersRepository.save(followArray, { chunk: 30000 });

    // await this.followersRepository
    //   .createQueryBuilder()
    //   .insert()
    //   .into('followers')
    //   .values(followArray)
    //   .execute();

    await AppDS.destroy();
    const records = quantity * userQuantity;
    return `Seed complete. ${records} records created. Now ${userQuantity} users follow ${quantity} each`;
    // return this.followersRepository.find();
  }
}
// await queryRunner.commitTransaction();
// await queryRunner.release();
// } catch (error) {
//   throw new InternalServerErrorException('some error');
// }
