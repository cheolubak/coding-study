import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('group_board_comment')
export class GroupBoardComment {
  @PrimaryGeneratedColumn('increment', {
    type: 'int',
    name: 'id',
    unsigned: true,
    comment: '게시글 댓글 ID',
  })
  commentId: number;
}
