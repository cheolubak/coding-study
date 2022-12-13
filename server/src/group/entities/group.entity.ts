import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';
import { GroupWay } from '../group-way.enum';
import { User } from '../../user/entities/user.entity';
import { Category } from '../../category/category.entity';

@Entity('group')
export class Group {
  @PrimaryGeneratedColumn('increment', {
    type: 'int',
    name: 'id',
    unsigned: true,
    comment: '그룹 ID',
  })
  groupId: number;

  @Column({
    type: 'varchar',
    length: 20,
    name: 'title',
    nullable: false,
    comment: '그룹 제목',
  })
  title: string;

  @Column({
    type: 'mediumtext',
    name: 'description',
    nullable: false,
    comment: '그룹 설명',
  })
  description: string;

  @Column({
    type: 'date',
    name: 'start_date',
    nullable: false,
    comment: '시작 일자',
  })
  startDate: Date;

  @Column({
    type: 'date',
    name: 'end_date',
    nullable: false,
    comment: '종료 일자',
  })
  endDate: Date;

  @Column({
    type: 'time',
    name: 'start_time',
    nullable: false,
    comment: '시작 시간',
  })
  startTime: Date;

  @Column({
    type: 'time',
    name: 'time',
    nullable: false,
    comment: '진행 시간',
  })
  time: Date;

  @Column({
    type: 'enum',
    enum: GroupWay,
    nullable: false,
    comment: '진행 방법',
  })
  way: GroupWay;

  @Column({
    type: 'smallint',
    name: 'price',
    nullable: false,
    comment: '그룹 비용',
  })
  price: number;

  @Column({
    type: 'smallint',
    name: 'like_count',
    nullable: false,
    default: 0,
    comment: '그룹 좋아요 수',
  })
  likeCount: number;

  @Column({
    type: 'tinyint',
    name: 'max_peoples',
    nullable: false,
    comment: '그룹 최대 참여 가능수',
  })
  maxPeoples: number;

  @Column({
    type: 'boolean',
    name: 'is_end_participate',
    nullable: false,
    default: false,
    comment: '그룹 모집 종료 여부',
  })
  isEndParticipate: boolean;

  @Column({
    type: 'mediumtext',
    name: 'notice',
    nullable: false,
    comment: '그룹 주의 사항',
  })
  notice: string;

  @CreateDateColumn({
    type: 'datetime',
    name: 'created_at',
    nullable: false,
    comment: '그룹 생성 일시',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'datetime',
    name: 'updated_at',
    nullable: false,
    comment: '그룹 변경 일시',
  })
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.userId)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToOne(() => Category, (category) => category.categoryId)
  @JoinColumn({ name: 'category_id' })
  category: Category;
}
