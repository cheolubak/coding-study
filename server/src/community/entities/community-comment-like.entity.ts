import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  JoinColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { CommunityComment } from './community-comment.entity';

@Entity('community_comment_like')
export class CommunityCommentLike {
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
    comment: '좋아요 일시',
  })
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.userId)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => CommunityComment, (comment) => comment.commentId)
  @JoinColumn({ name: 'comment_id' })
  comment: CommunityComment;
}
