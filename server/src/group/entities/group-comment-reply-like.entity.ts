import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  JoinColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { GroupCommentReply } from './group-comment-reply.entity';

@Entity('group_comment_reply_like')
export class GroupCommentReplyLike {
  @PrimaryColumn({
    type: 'int',
    name: 'user_id',
    unsigned: true,
    comment: '사용자 ID',
  })
  userId: number;

  @PrimaryColumn({
    type: 'int',
    name: 'reply_id',
    unsigned: true,
    comment: '답글 ID',
  })
  commentId: number;

  @CreateDateColumn({
    type: 'datetime',
    name: 'created_at',
    nullable: false,
    comment: '답글 좋아요 일시',
  })
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.userId)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => GroupCommentReply, (reply) => reply.replyId)
  @JoinColumn({ name: 'reply_id' })
  reply: GroupCommentReply;
}
