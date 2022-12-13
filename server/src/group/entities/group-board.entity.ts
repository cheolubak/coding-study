import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Group } from './group.entity';

@Entity('group_board')
export class GroupBoard {
  @PrimaryGeneratedColumn('increment', {
    type: 'int',
    name: 'id',
    unsigned: true,
    comment: '그룹 게시글 ID',
  })
  boardId: number;

  @Column({
    type: 'varchar',
    length: 20,
    name: 'title',
    nullable: false,
    comment: '게시글 제목',
  })
  title: string;

  @Column({
    type: 'mediumtext',
    name: 'description',
    nullable: false,
    comment: '게시글 내용',
  })
  description: string;

  @Column({
    type: 'boolean',
    name: 'is_deleted',
    nullable: false,
    default: false,
    comment: '게시글 삭제 여부',
  })
  isDeleted: boolean;

  @CreateDateColumn({
    type: 'datetime',
    name: 'created_at',
    nullable: false,
    comment: '게시글 등록 일시',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'datetime',
    name: 'updated_at',
    nullable: false,
    comment: '게시글 변경 일시',
  })
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.userId)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Group, (group) => group.groupId)
  @JoinColumn({ name: 'group_id' })
  group: Group;
}
