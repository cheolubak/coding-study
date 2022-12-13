import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  JoinColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { GroupBoardComment } from './group-board-comment.entity';

@Entity('group_board_comment_mention')
export class GroupBoardCommentMention {
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
    comment: '게시글 댓글 ID',
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

  @ManyToOne(() => GroupBoardComment, (comment) => comment.commentId)
  @JoinColumn({ name: 'comment_id' })
  comment: GroupBoardComment;
}
