import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { faker } from '@faker-js/faker';
// import { ErrorManager } from 'src/utils/error.manager';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import {
  UserDTO,
  UserToProjectDTO,
  UserUpdateDTO,
  QuantityDTO,
} from '../dto/user.dto';
import { UsersEntity } from '../entities/users.entity';
import { UsersProjectsEntity } from '../entities/usersProjects.entity';
import { AppDS } from 'src/config/data.source';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly userRepository: Repository<UsersEntity>,
    @InjectRepository(UsersProjectsEntity)
    private readonly userProjectRepository: Repository<UsersProjectsEntity>,
  ) {}

  public async createUser(body: UserDTO): Promise<UsersEntity> {
    try {
      body.password = await bcrypt.hash(body.password, +process.env.HASH_SALT);
      return await this.userRepository.save(body);
    } catch (error) {
      throw new InternalServerErrorException('some error');
    }
  }

  // public async seedUser(body: SeedUserDTO): Promise<UsersEntity[]> {
  public async seedUser(body: QuantityDTO): Promise<string> {
    // try {
    const quantity = body.quantity;
    await AppDS.initialize();
    const queryRunner = AppDS.createQueryRunner();
    // await queryRunner.startTransaction();
    await queryRunner.query('TRUNCATE TABLE "users" CASCADE');
    for (let iterations = 0; iterations < quantity; iterations++) {
      const username = faker.internet.userName();
      const pass = faker.internet.password();
      const password = await bcrypt.hash(pass, +process.env.HASH_SALT);
      const user = { username, password };
      await this.createUser(user);
    }
    // await queryRunner.commitTransaction();
    // await queryRunner.release();
    await AppDS.destroy();
    return `${quantity} users created`;
    // } catch (error) {
    //   throw new InternalServerErrorException('some error');
    // }
  }

  public async findUsers(): Promise<UsersEntity[]> {
    try {
      const users: UsersEntity[] = await this.userRepository.find();
      if (users.length === 0) {
        // throw new ErrorManager({
        //   type: 'BAD_REQUEST',
        //   message: 'No se encontro resultado',
        // });
      }
      return users;
    } catch (error) {
      throw new InternalServerErrorException('some error');
    }
  }

  public async findUserById(id: string): Promise<UsersEntity> {
    try {
      const user: UsersEntity = await this.userRepository
        .createQueryBuilder('user')
        .where({ id })
        .leftJoinAndSelect('user.projectsIncludes', 'projectsIncludes')
        .leftJoinAndSelect('projectsIncludes.project', 'project')
        .getOne();
      if (!user) {
        // throw new ErrorManager({
        //   type: 'BAD_REQUEST',
        //   message: 'No se encontro resultado',
        // });
      }
      return user;
    } catch (error) {
      throw new InternalServerErrorException('some error');
    }
  }

  public async relationToProject(body: UserToProjectDTO) {
    try {
      return await this.userProjectRepository.save(body);
    } catch (error) {
      throw new InternalServerErrorException('some error');
    }
  }

  public async findBy({ key, value }: { key: keyof UserDTO; value: any }) {
    try {
      const user: UsersEntity = await this.userRepository
        .createQueryBuilder('user')
        .addSelect('user.password')
        .where({ [key]: value })
        .getOne();

      return user;
    } catch (error) {
      throw new InternalServerErrorException('some error');
    }
  }

  public async updateUser(
    body: UserUpdateDTO,
    id: string,
  ): Promise<UpdateResult | undefined> {
    try {
      const user: UpdateResult = await this.userRepository.update(id, body);
      if (user.affected === 0) {
        // throw new ErrorManager({
        //   type: 'BAD_REQUEST',
        //   message: 'No se pudo actualizar',
        // });
      }
      return user;
    } catch (error) {
      throw new InternalServerErrorException('some error');
    }
  }

  public async deleteUser(id: string): Promise<DeleteResult | undefined> {
    try {
      const user: DeleteResult = await this.userRepository.delete(id);
      if (user.affected === 0) {
        // throw new ErrorManager({
        //   type: 'BAD_REQUEST',
        //   message: 'No se pudo borrar',
        // });
      }
      return user;
    } catch (error) {
      throw new InternalServerErrorException('some error');
    }
  }

  public async findUserByUsername(username: string): Promise<UsersEntity> {
    return await this.userRepository.findOne({ where: { username } });
  }
}
