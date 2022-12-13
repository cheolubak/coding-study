import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity('user_block')
export class UserBlock {
  @PrimaryColumn({
    type: 'int',
    name: 'user_id',
    unsigned: true,
    comment: '사용자 ID',
  })
  userId: number;

  @PrimaryColumn({
    type: 'int',
    name: 'block_user_id',
    unsigned: true,
    comment: '차단된 사용자 ID',
  })
  blockUserId: number;

  @Column({
    type: 'varchar',
    length: 200,
    name: 'reason',
    nullable: false,
    comment: '차단 이유',
  })
  reason: string;

  @CreateDateColumn({
    type: 'datetime',
    name: 'created_at',
    nullable: false,
    comment: '차단 일시',
  })
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.userId)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => User, (user) => user.userId)
  @JoinColumn({ name: 'block_user_id' })
  blockUser: User;
}
