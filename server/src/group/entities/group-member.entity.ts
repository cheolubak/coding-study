import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  JoinColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Group } from './group.entity';

@Entity('group_member')
export class GroupMember {
  @PrimaryColumn({
    type: 'int',
    name: 'user_id',
    unsigned: true,
    comment: '사용자 ID',
  })
  userId: number;

  @PrimaryColumn({
    type: 'int',
    name: 'group_id',
    unsigned: true,
    comment: '그룹 ID',
  })
  groupId: number;

  @Column({
    type: 'boolean',
    name: 'is_leader',
    nullable: false,
    comment: '그룹 리더 여부',
  })
  isLeader: boolean;

  @CreateDateColumn({
    type: 'datetime',
    name: 'created_at',
    nullable: false,
    comment: '그룹 참여 일시',
  })
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.userId)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Group, (group) => group.groupId)
  @JoinColumn({ name: 'group_id' })
  group: Group;
}
