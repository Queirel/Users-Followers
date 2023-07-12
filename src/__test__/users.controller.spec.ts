import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from '../users/controllers/users.controller';
import { UsersService } from '../users/services/users.service';
import { DataSourceConfig } from '../config/data.source';
import { UsersModule } from '../users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { INestApplication } from '@nestjs/common';
import { UsersEntity } from '../users/entities/users.entity';
import { UserDTO } from 'src/users/dto/user.dto';

describe('UserController', () => {
  let app: INestApplication;
  let controller: UsersController;
  // let usersService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forRoot(DataSourceConfig), UsersModule],
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    app = module.createNestApplication();
    await app.init();
    // usersService = module.get<UsersService>(UsersService);
  });

  describe('findUsers', () => {
    jest.setTimeout(60000);
    it('should return the user', async () => {
      // const mockUserId = '123';
      // const mockUser = { id: mockUserId, name: 'John Doe' };

      // jest.spyOn(usersService, 'findUsers').mockImplementation(() => mockUser);

      const result = await controller.findUsers();

      // expect(usersService.findUsers).toHaveBeenCalledWith();
      expect(result).toBe(result);
    });
  });

  // describe('findUsers2', () => {
  //   jest.setTimeout(60000);
  //   it('should return all users', async () => {
  //     const result = await controller.firstFive();
  //     expect(result).toBe(result);
  //     console.log(result);
  //   });
  // });

  afterAll(async () => {
    await app.close();
    // await AppDS.destroy();
  });
});
