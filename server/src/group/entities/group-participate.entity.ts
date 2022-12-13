import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Group } from './group.entity';

@Entity('group_participate')
export class GroupParticipate {
  @PrimaryGeneratedColumn('increment', {
    type: 'int',
    name: 'id',
    unsigned: true,
    comment: '그룹 참여 신청 ID',
  })
  participateId: number;

  @Column({
    type: 'varchar',
    length: 500,
    name: 'motivation',
    nullable: false,
    comment: '그룹 참여 동기',
  })
  motivation: string;

  @Column({
    type: 'boolean',
    name: 'is_agreed',
    nullable: false,
    comment: '주의 사항 동의 여부',
  })
  isAgreed: boolean;

  @Column({
    type: 'boolean',
    name: 'is_canceled',
    nullable: false,
    default: false,
    comment: '그룹 참여 취소 여부',
  })
  isCanceled: boolean;

  @CreateDateColumn({
    type: 'datetime',
    name: 'created_at',
    nullable: false,
    comment: '그룹 참여 신청 일시',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'datetime',
    name: 'updated_at',
    nullable: false,
    comment: '그룹 참여 변경 일시',
  })
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.userId)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Group, (group) => group.groupId)
  @JoinColumn({ name: 'group_id' })
  group: Group;
}
