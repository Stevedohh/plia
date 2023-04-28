import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleEntity } from './role.entity';
import { CreateRoleDto } from './dto/create-role.dto';

@Injectable()
export class RoleService {
  constructor(@InjectRepository(RoleEntity) private roleRepository) {}

  createRole(roleDto: CreateRoleDto) {
    return this.roleRepository.save(roleDto);
  }

  getRoleByValue(value: string) {
    return this.roleRepository.findOne({ where: { value } });
  }
}
