import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ReportStatus } from './report-status.enum';
import { ReportType } from './report-type.enum';

@Entity('report')
export class Report {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    unsigned: true,
    comment: '신고 ID',
  })
  reportId: number;

  @Column({
    type: 'varchar',
    length: 200,
    name: 'reason',
    nullable: false,
    comment: '신고 사유',
  })
  reason: string;

  @Column({
    type: 'enum',
    enum: ReportStatus,
    name: 'status',
    default: ReportStatus.TEMP,
    comment: '신고 상태',
  })
  status: ReportStatus;

  @Column({
    type: 'int',
    name: 'item_id',
    unsigned: true,
    nullable: false,
    comment: '신고 대상 ID',
  })
  @Index()
  itemId: number;

  @Column({
    type: 'enum',
    enum: ReportType,
    name: 'type',
    comment: '신고 타입',
  })
  type: ReportType;

  @CreateDateColumn({
    type: 'datetime',
    name: 'created_at',
    nullable: false,
    comment: '신고 일시',
  })
  createdAt: Date;
}
