import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceConfig } from './config/data.source';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
import { TasksModule } from './tasks/tasks.module';
// import { DevtoolsModule } from '@nestjs/devtools-integration';
import { AuthModule } from './auth/auth.module';
import { FollowersModule } from './followers/followers.module';
import { ScheduleModule } from '@nestjs/schedule';
// import { FollowersModule } from './followers/followers.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    // DevtoolsModule.register({
    //   http: process.env.NODE_ENV !== 'production',
    //   port: 8001,
    // }),
    TypeOrmModule.forRoot(DataSourceConfig),
    UsersModule,
    ProjectsModule,
    TasksModule,
    AuthModule,
    FollowersModule,
    // FollowersModule,
  ],
})
export class AppModule {}
