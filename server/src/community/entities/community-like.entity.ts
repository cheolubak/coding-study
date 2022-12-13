import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Community } from './community.entity';

@Entity('community_like')
export class CommunityLike {
  @PrimaryColumn({
    type: 'int',
    name: 'user_id',
    unsigned: true,
    comment: '사용자 ID',
  })
  userId: number;

  @PrimaryColumn({
    type: 'int',
    name: 'community_id',
    unsigned: true,
    comment: '커뮤니티 글 ID',
  })
  communityId: number;

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

  @ManyToOne(() => Community, (community) => community.communityId)
  @JoinColumn({ name: 'community_id' })
  community: Community;
}
