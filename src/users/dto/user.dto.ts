import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
// import { ACCESS_LEVEL, ROLES } from 'src/constants/roles';
import { ProjectsEntity } from '../../projects/entities/projects.entity';
import { UsersEntity } from '../entities/users.entity';

export class UserDTO {
  // @ApiProperty()
  // @IsNotEmpty()
  // @IsString()
  // firstName: string;

  // @ApiProperty()
  // @IsNotEmpty()
  // @IsString()
  // lastName: string;

  // @ApiProperty()
  // @IsNotEmpty()
  // @IsNumber()
  // age: number;

  // @ApiProperty()
  // @IsNotEmpty()
  // @IsString()
  // email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password: string;

  // @ApiProperty()
  // @IsNotEmpty()
  // @IsEnum(ROLES)
  // role: ROLES;
}

export class UserUpdateDTO {
  @IsOptional()
  @IsString()
  firstName: string;
  @IsOptional()
  @IsString()
  lastName: string;
  @IsOptional()
  @IsNumber()
  age: number;
  @IsOptional()
  @IsString()
  email: string;
  @IsOptional()
  @IsString()
  username: string;

  @IsOptional()
  @IsString()
  password: string;

  // @IsOptional()
  // @IsEnum(ROLES)
  // role: ROLES;
}

export class UserToProjectDTO {
  @IsNotEmpty()
  @IsUUID()
  user: UsersEntity;
  @IsOptional()
  @IsUUID()
  project: ProjectsEntity;
  // @IsNotEmpty()
  // @IsEnum(ACCESS_LEVEL)
  // accessLevel: ACCESS_LEVEL;
}

export class QuantityDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  quantity: number;
}
