import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '@plia/plia/auth/api';

import { UserService } from './user.service';

@UseGuards(JwtAuthGuard)
@ApiTags('user')
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  getAll() {
    return this.userService.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get all users' })
  getById(@Param('id') userId: string) {
    return this.userService.getById(userId);
  }
}
