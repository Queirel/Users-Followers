import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from '../../users/services/users.service';
import { INestApplication } from '@nestjs/common';
import { UsersModule } from '../../users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceConfig } from '../../config/data.source';

describe('Users Services', () => {
  let app: INestApplication;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forRoot(DataSourceConfig), UsersModule],
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
    app = module.createNestApplication();
    await app.init();
    // await AppDS.initialize();
  });

  it('should be defined', async () => {
    let id: string;
    const body = {
      username: 'fede',
      password: 'pass',
    };
    await service.createUser(body);
    console.log(body);
    expect({ ...body, id }).toEqual({
      username: body.username,
      password: body.password,
    });
  });

  afterAll(async () => {
    await app.close();
    // await AppDS.destroy();
  });
});
