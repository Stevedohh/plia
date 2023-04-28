import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CreateUserDto, LoginUserDto } from '@plia/plia/user/api';

@ApiTags('auth')
@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  login(@Body() userDto: LoginUserDto) {
    return this.authService.login(userDto);
  }

  @Post('/register')
  register(@Body() userDto: CreateUserDto) {
    return this.authService.register(userDto);
  }
}
