import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Category } from '../../category/category.entity';

@Entity('community')
export class Community {
  @PrimaryGeneratedColumn('increment', {
    type: 'int',
    name: 'id',
    unsigned: true,
    comment: '커뮤니티 글 ID',
  })
  communityId: number;

  @Column({
    type: 'varchar',
    length: 20,
    name: 'title',
    nullable: false,
    comment: '커뮤니티 글 제목',
  })
  title: string;

  @Column({
    type: 'mediumtext',
    name: 'description',
    nullable: false,
    comment: '커뮤니티 글 내용',
  })
  description: string;

  @Column({
    type: 'smallint',
    name: 'like_count',
    nullable: false,
    default: 0,
    comment: '글 좋아요 수',
  })
  likeCount: number;

  @Column({
    type: 'boolean',
    name: 'is_deleted',
    nullable: false,
    default: false,
    comment: '글 삭제 여부',
  })
  isDeleted: boolean;

  @CreateDateColumn({
    type: 'datetime',
    name: 'created_at',
    nullable: false,
    comment: '글 등록 일시',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'datetime',
    name: 'updated_at',
    nullable: false,
    comment: '글 변경 일시',
  })
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.userId)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Category, (category) => category.categoryId)
  @JoinColumn({ name: 'category_id' })
  category: Category;
}
