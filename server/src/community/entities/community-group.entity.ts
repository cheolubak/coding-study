import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  JoinColumn,
} from 'typeorm';
import { Community } from './community.entity';
import { Group } from '../../group/entities/group.entity';

@Entity('community_group')
export class CommunityGroup {
  @PrimaryColumn({
    type: 'int',
    name: 'community_id',
    unsigned: true,
    comment: '커뮤니티 글 ID',
  })
  communityId: number;

  @PrimaryColumn({
    type: 'int',
    name: 'group_id',
    unsigned: true,
    comment: '그룹 ID',
  })
  groupId: number;

  @CreateDateColumn({
    type: 'datetime',
    name: 'created_at',
    nullable: false,
    comment: '등록 일시',
  })
  createdAt: Date;

  @ManyToOne(() => Community, (community) => community.communityId)
  @JoinColumn({ name: 'community_id' })
  community: Community;

  @ManyToOne(() => Group, (group) => group.groupId)
  @JoinColumn({ name: 'group_id' })
  group: Group;
}
