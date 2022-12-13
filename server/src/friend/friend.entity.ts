import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { User } from '../user/entities/user.entity';

@Entity('friend')
export class Friend {
  @PrimaryColumn({
    type: 'int',
    name: 'user_id',
    unsigned: true,
    comment: '사용자 ID',
  })
  userId: number;

  @PrimaryColumn({
    type: 'int',
    name: 'friend_user_id',
    unsigned: true,
    comment: '친구 사용자 ID',
  })
  friendUserId: number;

  @CreateDateColumn({
    type: 'datetime',
    name: 'created_at',
    nullable: false,
    comment: '친구 등록 일시',
  })
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.userId)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => User, (user) => user.userId)
  @JoinColumn({ name: 'friend_user_id' })
  friend: User;
}
