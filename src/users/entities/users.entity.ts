import { Column, Entity, OneToMany } from 'typeorm';
import { Exclude } from 'class-transformer';
// import { ROLES } from '../../constants/roles';
import { IUser } from '../../interfaces/user.interface';
import { BaseEntity } from '../../config/base.entity';
import { UsersProjectsEntity } from './usersProjects.entity';
import { FollowersEntity } from '../../followers/entities/followers.entity';

@Entity({ name: 'users' })
export class UsersEntity extends BaseEntity implements IUser {
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
