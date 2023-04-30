import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcryptjs';
import { Repository } from 'typeorm';

import { Roles } from '@plia/plia/types';

import { CreateUserDto } from './dto';
import { RoleService } from './partitions';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,
    private roleService: RoleService,
  ) {}

  getById(id: string) {
    return this.userRepository.findOne({ where: { id }, relations: { role: true } });
  }

  getByEmail(email: string) {
    return this.userRepository.findOne({ where: { email }, relations: { role: true } });
  }

  getAll() {
    return this.userRepository.find({ relations: { role: true } });
  }

  async create(userDto: CreateUserDto) {
    const user = await this.userRepository.create(userDto);
    user.role = await this.roleService.getRoleByValue(Roles.USER);
    return this.userRepository.save(user);
  }

  async update(id: string, userDto: CreateUserDto) {
    const newUser = { ...userDto };

    if (userDto?.password) {
      newUser.password = await bcrypt.hash(userDto.password, 5);
    }

    return this.userRepository.update({ id }, userDto);
  }

  delete(id: string) {
    return this.userRepository.delete({ id });
  }
}
