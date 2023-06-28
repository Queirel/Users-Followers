import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { UsersEntity } from '../../users/entities/users.entity';

export class FollowerDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  follower: string | UsersEntity;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  following: string | UsersEntity;
}
