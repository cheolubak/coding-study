import { User } from '../entities/user.entity';

export class UserDTO {
  nickname: string;
  email?: string;
  profile: string;
  isAdmin: boolean;

  constructor(user: User) {
    this.nickname = user.nickname;
    this.email = user.email;
    this.profile = user.profile;
    this.isAdmin = !!user.admin;
  }
}
