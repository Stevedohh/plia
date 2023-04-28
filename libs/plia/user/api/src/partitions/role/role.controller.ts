import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '@plia/plia/auth/api';

@UseGuards(JwtAuthGuard)
@ApiTags('user')
@Controller()
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  @ApiOperation({ summary: 'Create new role' })
  create(@Body() dto: CreateRoleDto) {
    return this.roleService.createRole(dto);
  }

  @Get('/:value')
  @ApiOperation({ summary: 'Get role by value' })
  getByValue(@Param('value') value: string) {
    return this.roleService.getRoleByValue(value);
  }
}
