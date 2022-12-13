import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { CommunityComment } from './community-comment.entity';

@Entity('community_comment_reply')
export class CommunityCommentReply {
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
    comment: '좋아요 수',
  })
  likeCount: number;

  @Column({
    type: 'boolean',
    name: 'is_deleted',
    nullable: false,
    default: false,
    comment: '삭제 여부',
  })
  isDeleted: boolean;

  @ManyToOne(() => User, (user) => user.userId)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => CommunityComment, (comment) => comment.commentId)
  @JoinColumn({ name: 'comment_id' })
  comment: CommunityComment;
}
