import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('tag')
export class Tag {
  @PrimaryGeneratedColumn('increment', {
    type: 'int',
    name: 'id',
    unsigned: true,
    comment: '태그 ID',
  })
  tagId: number;

  @Column({
    type: 'varchar',
    length: 10,
    name: 'title',
    nullable: false,
    comment: '태그명',
  })
  title: string;

  @CreateDateColumn({
    type: 'datetime',
    name: 'created_at',
    nullable: false,
    comment: '태그 생성일',
  })
  createdAt: Date;
}
