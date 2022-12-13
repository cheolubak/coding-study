import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  JoinColumn,
} from 'typeorm';
import { Group } from './group.entity';
import { Tag } from '../../tag/tag.entity';

@Entity('group_tag')
export class GroupTag {
  @PrimaryColumn({
    type: 'int',
    name: 'group_id',
    unsigned: true,
    comment: '그룹 ID',
  })
  groupId: number;

  @PrimaryColumn({
    type: 'int',
    name: 'tag_id',
    unsigned: true,
    comment: '태그 ID',
  })
  tagId: number;

  @CreateDateColumn({
    type: 'datetime',
    name: 'created_at',
    nullable: false,
    comment: '그룹 태그 등록 일시',
  })
  createdAt: Date;

  @ManyToOne(() => Group, (group) => group.groupId)
  @JoinColumn({ name: 'group_id' })
  group: Group;

  @ManyToOne(() => Tag, (tag) => tag.tagId)
  @JoinColumn({ name: 'tag_id' })
  tag: Tag;
}
