import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { CommunityCommentReply } from './community-comment-reply.entity';

@Entity('community_comment_reply_mention')
export class CommunityCommentReplyMention {
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
  replyId: number;

  @CreateDateColumn({
    type: 'datetime',
    name: 'created_at',
    nullable: false,
    comment: '등록 일시',
  })
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.userId)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => CommunityCommentReply, (reply) => reply.replyId)
  @JoinColumn({ name: 'reply_id' })
  reply: CommunityCommentReply;
}
