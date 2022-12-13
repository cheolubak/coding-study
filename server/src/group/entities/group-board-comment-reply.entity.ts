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
import { GroupBoardComment } from './group-board-comment.entity';

@Entity('group_board_comment_reply')
export class GroupBoardCommentReply {
  @PrimaryGeneratedColumn('increment', {
    type: 'int',
    name: 'id',
    unsigned: true,
    comment: '게시글 답글 ID',
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
    comment: '답글 생성 일시',
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

  @ManyToOne(() => GroupBoardComment, (comment) => comment.commentId)
  @JoinColumn({ name: 'comment_id' })
  comment: GroupBoardComment;
}
