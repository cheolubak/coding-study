import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  JoinColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { GroupComment } from './group-comment.entity';

@Entity('group_comment_mention')
export class GroupCommentMention {
  @PrimaryColumn({
    type: 'int',
    name: 'user_id',
    unsigned: true,
    comment: '사용자 ID',
  })
  userId: number;

  @PrimaryColumn({
    type: 'int',
    name: 'comment_id',
    unsigned: true,
    comment: '댓글 ID',
  })
  commentId: number;

  @CreateDateColumn({
    type: 'datetime',
    name: 'created_at',
    nullable: false,
    comment: '댓글 멘션 일시',
  })
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.userId)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => GroupComment, (comment) => comment.commentId)
  @JoinColumn({ name: 'comment_id' })
  comment: GroupComment;
}
