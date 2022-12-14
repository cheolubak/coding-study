import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async registerUser({
    uid,
    profile,
    email,
    nickname,
  }: {
    uid: string;
    profile: string;
    email?: string;
    nickname: string;
  }): Promise<User> {
    return await this.userRepository.save(
      new User({ uid, email, profile, nickname }),
    );
  }

  async getUser(uid: string): Promise<User | null> {
    return await this.userRepository.findOne({ where: { uid } });
  }
}
