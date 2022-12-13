import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Admin } from './admin.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('increment', {
    type: 'int',
    name: 'id',
    unsigned: true,
    comment: '사용자 ID',
  })
  userId: number;

  @Column({
    type: 'varchar',
    length: 32,
    name: 'uid',
    nullable: false,
    comment: '사용자 FIREBASE UID',
  })
  uid: string;

  @Column({
    type: 'varchar',
    length: 30,
    name: 'email',
    nullable: true,
    comment: '사용자 이메일',
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 20,
    name: 'nickname',
    nullable: false,
    comment: '사용자 닉네임',
  })
  nickname: string;

  @Column({
    type: 'varchar',
    length: 100,
    name: 'profile',
    nullable: false,
    comment: '사용자 프로필',
  })
  profile: string;

  @CreateDateColumn({
    type: 'datetime',
    name: 'created_at',
    nullable: false,
    comment: '사용자 등록 일시',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'datetime',
    name: 'updated_at',
    nullable: false,
    comment: '사용자 수정 일시',
  })
  updatedAt: Date;

  @OneToOne(() => Admin, (admin) => admin.user)
  admin?: Admin;
}
