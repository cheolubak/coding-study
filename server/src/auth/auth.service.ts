import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { SignUpDto } from './dto/sign-up.dto';
import { DecodedIdToken, getAuth } from 'firebase-admin/auth';
import { UserDTO } from '../user/dtos/user.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(private readonly userService: UserService) {}

  async signUp(dto: SignUpDto): Promise<UserDTO> {
    try {
      const { uid, email, picture } = await this.checkUserToken(dto.token);

      const findUser = await this.userService.getUser(uid);
      if (!!findUser) {
        throw { code: 409 };
      }
      const user = await this.userService.registerUser({
        uid,
        email,
        profile: picture,
        nickname: dto.nickname,
      });
      return new UserDTO(user);
    } catch (err) {
      this.logger.error(err);
      const { code, message } = err;
      if (code === 'ER_DUP_ENTRY' || code === 409) {
        throw new ConflictException(message ?? '이미 회원가입을 완료했어요.');
      } else if (code === 'auth/argument-error') {
        throw new BadRequestException('인증 정보가 잘못되었어요.');
      } else if (code === 'auth/id-token-expired') {
        throw new BadRequestException('인증 정보가 만료되었어요.');
      } else {
        throw new InternalServerErrorException(message);
      }
    }
  }

  async login(dto: SignUpDto): Promise<UserDTO> {
    try {
      const { uid, email, picture } = await this.checkUserToken(dto.token);

      const findUser = await this.userService.getUser(uid);
      if (!findUser) {
        throw { code: 404 };
      }

      return new UserDTO(findUser);
    } catch (err) {
      this.logger.error(err);
      const { code, message } = err;
      if (code === 404) {
        throw new NotFoundException('회원가입이 필요해요.');
      } else if (code === 'auth/argument-error') {
        throw new BadRequestException('인증 정보가 잘못되었어요.');
      } else if (code === 'auth/id-token-expired') {
        throw new BadRequestException('인증 정보가 만료되었어요.');
      } else {
        throw new InternalServerErrorException(message);
      }
    }
  }

  async validate(token?: string) {
    try {
      if (!!token) {
        const { uid } = await this.checkUserToken(token);
        return await this.userService.getUser(uid);
      } else {
        return null;
      }
    } catch (err) {
      this.logger.error(err);
      const { code, message } = err;
      if (code === 'auth/argument-error') {
        throw new BadRequestException('인증 정보가 잘못되었어요.');
      } else if (code === 'auth/id-token-expired') {
        throw new BadRequestException('인증 정보가 만료되었어요.');
      } else {
        throw new InternalServerErrorException(message);
      }
    }
  }

  private async checkUserToken(token: string): Promise<DecodedIdToken> {
    return await getAuth().verifyIdToken(token);
  }
}
