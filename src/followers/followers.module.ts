import { Module } from '@nestjs/common';
import { FollowersController } from './controllers/followers.controller';
import { FollowersService } from './services/followers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FollowersEntity } from './entities/followers.entity';
import { UsersEntity } from 'src/users/entities/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FollowersEntity, UsersEntity])],
  controllers: [FollowersController],
  providers: [FollowersService],
})
export class FollowersModule {}
