import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreateUserDto, LoginUserDto, UserEntity } from '@plia/plia/user/api';

import { User } from '../../../user/api/src/user.decorator';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards';

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

  @UseGuards(JwtAuthGuard)
  @Post('/update')
  update(@Body() userDto: CreateUserDto, @User() user: UserEntity) {
    return this.authService.update(user.id, userDto);
  }
}
