import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';
import { GroupComment } from './group-comment.entity';
import { User } from '../../user/entities/user.entity';

@Entity('group_comment_reply')
export class GroupCommentReply {
  @PrimaryGeneratedColumn('increment', {
    type: 'int',
    name: 'id',
    unsigned: true,
    comment: '답글 ID',
  })
  replyId: number;

  @Column({
    type: 'varchar',
    length: 200,
    name: 'content',
    nullable: false,
    comment: '답글 내용',
  })
  content: string;

  @Column({
    type: 'smallint',
    name: 'like_count',
    nullable: false,
    default: 0,
    comment: '답글 좋아요 수',
  })
  likeCount: number;

  @Column({
    type: 'boolean',
    name: 'is_deleted',
    nullable: false,
    default: false,
    comment: '답글 삭제 여부',
  })
  isDeleted: boolean;

  @CreateDateColumn({
    type: 'datetime',
    name: 'created_at',
    nullable: false,
    comment: '답글 등록 일시',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'datetime',
    name: 'updated_at',
    nullable: false,
    comment: '답글 변경 일시',
  })
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.userId)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => GroupComment, (comment) => comment.commentId)
  @JoinColumn({ name: 'comment_id' })
  comment: GroupComment;
}
