import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Community } from './community.entity';

@Entity('community_comment')
export class CommunityComment {
  @PrimaryGeneratedColumn('increment', {
    type: 'int',
    name: 'id',
    unsigned: true,
    comment: '댓글 ID',
  })
  commentId: number;

  @Column({
    type: 'varchar',
    length: 200,
    name: 'content',
    nullable: false,
    comment: '댓글 내용',
  })
  content: string;

  @Column({
    type: 'smallint',
    name: 'like_count',
    nullable: false,
    default: 0,
    comment: '댓글 좋아요 수',
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

  @CreateDateColumn({
    type: 'datetime',
    name: 'created_at',
    nullable: false,
    comment: '댓글 등록 일시',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'datetime',
    name: 'updated_at',
    nullable: false,
    comment: '댓글 변경 일시',
  })
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.userId)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Community, (community) => community.communityId)
  @JoinColumn({ name: 'community_id' })
  community: Community;
}
