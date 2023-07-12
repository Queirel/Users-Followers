import { ConfigModule } from '@nestjs/config';
// import InitSeeder from 'src/utils/database/seeders/init.seeder';
import { DataSource, DataSourceOptions } from 'typeorm';

ConfigModule.forRoot({
  envFilePath: `.${process.env.NODE_ENV}.env`,
});

// const configService = new ConfigService();

export const DataSourceConfig: DataSourceOptions = {
  type: 'postgres',
  // host: configService.get('DB_HOST'),
  // port: configService.get('DB_PORT'),
  // username: configService.get('DB_USER'),
  // password: configService.get('DB_PASSWORD'),
  // database: configService.get('DB_NAME'),
  host: 'localhost',
  port: 5433,
  username: 'postgres',
  password: 'password',
  database: 'DB123456',
  entities: [__dirname + '/../**/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/../migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations',
  synchronize: false,
  migrationsRun: true,
  logging: false,
  cache: true,
  // runSeeders: [InitSeeder],
  // namingStrategy: new SnakeNamingStrategy(),
};

export const AppDS = new DataSource(DataSourceConfig);

// export const dataSource = new DataSource(
//   options as DataSourceOptions & SeederOptions,
// );
