import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ApiHeader, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProjectsEntity } from 'src/projects/entities/projects.entity';
import {
  QuantityDTO,
  UserDTO,
  UserToProjectDTO,
  UserUpdateDTO,
} from '../dto/user.dto';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiTags('Users')
  @Post('register')
  public async registerUser(@Body() body) {
    return await this.usersService.createUser(body);
  }

  @ApiTags('Users')
  @Post('seed')
  public async seedUser(@Body() body: QuantityDTO) {
    return await this.usersService.seedUser(body);
  }

  // @ApiHeader({
  //   name: 'token',
  // })
  @ApiTags('Users')
  @Get('all')
  public async findUsers() {
    return await this.usersService.findUsers();
  }

  @ApiTags('Users')
  @Get('allUsers')
  public async findAllUsers() {
    return await this.usersService.findAllUsers();
  }

  // @ApiTags('Users')
  // @Get('alli')
  // public async findAlliUsers() {
  //   return await this.usersService.findAlliUsers();
  // }

  @ApiTags('Users')
  @Get('five')
  public async firstFive() {
    return await this.usersService.firstFive();
  }

  @ApiTags('Users')
  @ApiParam({
    name: 'id',
  })
  // @ApiHeader({
  //   name: 'token',
  // })
  @ApiResponse({
    status: 400,
    description: 'No se encontro resultado',
  })
  @Get(':id')
  public async findUserById(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.usersService.findUserById(id);
  }

  @ApiParam({
    name: 'projectId',
  })
  @Post('add-to-project/:projectId')
  public async addToProject(
    @Body() body: UserToProjectDTO,
    @Param('projectId', new ParseUUIDPipe()) id: string,
  ) {
    return await this.usersService.relationToProject({
      ...body,
      project: id as unknown as ProjectsEntity,
    });
  }

  @ApiParam({
    name: 'id',
  })
  @Put('edit/:id')
  public async updateUser(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: UserUpdateDTO,
  ) {
    return await this.usersService.updateUser(body, id);
  }

  @ApiTags('Users')
  @ApiParam({
    name: 'id',
  })
  @Delete('delete/:id')
  public async deleteUser(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.usersService.deleteUser(id);
  }
}
