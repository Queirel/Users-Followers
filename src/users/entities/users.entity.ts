import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
// import { ROLES } from '../../constants/roles';
import { IUser } from '../../interfaces/user.interface';
import { BaseEntity } from '../../config/base.entity';
import { UsersProjectsEntity } from './usersProjects.entity';
import { FollowersEntity } from '../../followers/entities/followers.entity';

@Entity({ name: 'users' })
// extends BaseEntity implements IUser
export class UsersEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // @Column()
  // firstName: string;

  // @Column()
  // lastName: string;

  // @Column()
  // age: number;

  // @Column({ unique: true })
  // email: string;

  @Column()
  username: string;

  @Exclude()
  @Column()
  password: string;

  // @Column({ type: 'enum', enum: ROLES })
  // role: ROLES;

  @OneToMany(() => FollowersEntity, (uf: FollowersEntity) => uf.followers)
  followers: FollowersEntity;

  @OneToMany(() => FollowersEntity, (uf: FollowersEntity) => uf.following)
  following: FollowersEntity;

  @OneToMany(() => UsersProjectsEntity, (usersProjects) => usersProjects.user)
  projectsIncludes: UsersProjectsEntity[];
}
