import {
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryColumn,
  JoinColumn,
} from 'typeorm';
import { Group } from './group.entity';
import { Region } from '../../region/region.entity';

@Entity('group_region')
export class GroupRegion {
  @PrimaryColumn({
    type: 'int',
    name: 'group_id',
    unsigned: true,
    comment: '그룹 ID',
  })
  groupId: number;

  @PrimaryColumn({
    type: 'int',
    name: 'region_id',
    unsigned: true,
    comment: '지역 ID',
  })
  regionId: number;

  @CreateDateColumn({
    type: 'datetime',
    name: 'created_at',
    nullable: false,
    comment: '그룹 지역 등록 일시',
  })
  createdAt: Date;

  @OneToOne(() => Group, (group) => group.groupId)
  @JoinColumn({ name: 'group_id' })
  group: Group;

  @OneToOne(() => Region, (region) => region.regionId)
  @JoinColumn({ name: 'region_id' })
  region: Region;
}
