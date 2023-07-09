import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { UsersEntity } from '../../users/entities/users.entity';

@Entity({ name: 'followers' })
export class FollowersEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  follower_id: string;

  @Column()
  following_id: string;

  @ManyToOne(() => UsersEntity, (u: UsersEntity) => u.followers)
  @JoinColumn({ name: 'follower_id' })
  followers: UsersEntity;

  @ManyToOne(() => UsersEntity, (u: UsersEntity) => u.following)
  @JoinColumn({ name: 'following_id' })
  following: UsersEntity;
}
