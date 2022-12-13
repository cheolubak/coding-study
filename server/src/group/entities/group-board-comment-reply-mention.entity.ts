import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  JoinColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { GroupBoardCommentReply } from './group-board-comment-reply.entity';

@Entity('group_board_comment__reply_mention')
export class GroupBoardCommentReplyMention {
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
    comment: '게시글 답글 ID',
  })
  replyId: number;

  @CreateDateColumn({
    type: 'datetime',
    name: 'created_at',
    nullable: false,
    comment: '답글 멘션 일시',
  })
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.userId)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => GroupBoardCommentReply, (reply) => reply.replyId)
  @JoinColumn({ name: 'reply_id' })
  reply: GroupBoardCommentReply;
}
