import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/sign-up.dto';
import { AuthDto } from './dto/auth.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  signUp(@Body() body: SignUpDto): AuthDto {
    return { accessToken: '' };
  }

  @Post('login')
  login(@Body() body: LoginDto): AuthDto {
    return { accessToken: '' };
  }
}
