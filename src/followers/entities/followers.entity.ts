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
import { Exclude } from 'class-transformer';

@Entity({ name: 'followers' })
export class FollowersEntity {
  @Exclude()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Exclude()
  @Column()
  follower_id: string;
  // @Exclude()
  @Column()
  following_id: string;

  @ManyToOne(() => UsersEntity, (u: UsersEntity) => u.followers)
  @JoinColumn({ name: 'follower_id' })
  followers: UsersEntity;

  @ManyToOne(() => UsersEntity, (u: UsersEntity) => u.following)
  @JoinColumn({ name: 'following_id' })
  following: UsersEntity;
}
