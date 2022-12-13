import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  JoinColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { GroupBoard } from './group-board.entity';

@Entity('group_board_like')
export class GroupBoardLike {
  @PrimaryColumn({
    type: 'int',
    name: 'user_id',
    unsigned: true,
    comment: '사용자 ID',
  })
  userId: number;

  @PrimaryColumn({
    type: 'int',
    name: 'board_id',
    unsigned: true,
    comment: '게시글 ID',
  })
  boardId: number;

  @CreateDateColumn({
    type: 'datetime',
    name: 'created_at',
    nullable: false,
    comment: '게시글 좋아요 일시',
  })
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.userId)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => GroupBoard, (board) => board.boardId)
  @JoinColumn({ name: 'board_id' })
  board: GroupBoard;
}
