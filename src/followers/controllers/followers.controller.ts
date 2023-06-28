import { Body, Controller, Get, Post } from '@nestjs/common';
import { QuantityDTO } from '../../users/dto/user.dto';
import { FollowersService } from '../services/followers.service';
import { FollowersEntity } from '../entities/followers.entity';
import { ApiTags } from '@nestjs/swagger';
// import { PaginationDTO } from 'src/utils/pagination/pagination.dto';

@ApiTags('Followers')
@Controller('followers')
export class FollowersController {
  constructor(private readonly followersService: FollowersService) {}

  @Post('seed')
  public async seedFollowers(@Body() body: QuantityDTO) {
    return await this.followersService.seedFollowers(body);
  }

  @Post('create')
  public async createFollower(@Body() body: FollowersEntity) {
    await this.followersService.createFollower(body);
  }

  @Get('all')
  public async findFollowers() {
    return await this.followersService.findFollowers();
  }
}

// @Post('seed')
// public async createFollowers(@Body() body: QuantityDTO) {
//   return await this.followersService.createFollowers(body);
// }
