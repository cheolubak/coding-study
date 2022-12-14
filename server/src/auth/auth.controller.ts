import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/sign-up.dto';
import { UserDTO } from '~/user/dtos/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  signUp(@Body() body: SignUpDto): Promise<UserDTO> {
    return this.authService.signUp(body);
  }

  @Post('login')
  login(@Body() body: SignUpDto): Promise<UserDTO> {
    return this.authService.login(body);
  }
}
