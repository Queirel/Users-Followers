import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from '../users/controllers/users.controller';
import { UsersService } from '../users/services/users.service';
import { UsersModule } from '../users/users.module';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
      imports: [UsersModule],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
