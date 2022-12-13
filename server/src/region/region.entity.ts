import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('region')
export class Region {
  @PrimaryGeneratedColumn('increment', {
    type: 'int',
    name: 'id',
    unsigned: true,
    comment: '지역 ID',
  })
  regionId: number;

  @Column({
    type: 'varchar',
    length: 30,
    name: 'title',
    nullable: false,
    comment: '지역명',
  })
  title: string;

  @CreateDateColumn({
    type: 'datetime',
    name: 'created_at',
    nullable: false,
    comment: '지역 등록 일시',
  })
  createdAt: Date;
}
