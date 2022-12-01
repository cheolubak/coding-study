import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserProfile } from './user-profile.entity';

@Entity('user')
export class User {
  @PrimaryColumn('int', { name: 'user_id' })
  userId: number;

  @Column('varchar', { length: 32, name: 'uid' })
  uid: string;

  @Column('varchar', { length: 30, name: 'email' })
  email: string;

  @Column('varchar', { length: 20, name: 'nickname' })
  nickname: string;

  @CreateDateColumn({ type: 'datetime', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'datetime', name: 'updated_at' })
  updatedAt: Date;

  @OneToOne(() => UserProfile, (userProfile) => userProfile.user)
  userProfile?: UserProfile;
}
