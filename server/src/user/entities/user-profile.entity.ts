import { Column, Entity, OneToOne, PrimaryColumn } from 'typeorm';
import { JoinColumn } from 'typeorm/browser';
import { User } from './user.entity';

@Entity()
export class UserProfile {
  @PrimaryColumn('int', { name: 'user_id' })
  userId: number;

  @Column('varchar', { name: 'profile', length: 30 })
  profile: string;

  @OneToOne(() => User, (user) => user.userId)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
