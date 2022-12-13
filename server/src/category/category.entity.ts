import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('category')
export class Category {
  @PrimaryGeneratedColumn('increment', {
    type: 'int',
    name: 'id',
    unsigned: true,
    comment: '카테고리 ID',
  })
  categoryId: number;

  @Column({
    type: 'varchar',
    length: 20,
    name: 'title',
    nullable: false,
    comment: '카테고리명',
  })
  title: string;

  @CreateDateColumn({
    type: 'datetime',
    name: 'created_at',
    nullable: false,
    comment: '카테고리 등록 일시',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'datetime',
    name: 'updated_at',
    nullable: false,
    comment: '카테고리 변경 일시',
  })
  updatedAt: Date;
}
