import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto';
import { Roles } from '@plia/plia/types';
import { RoleService } from './partitions';

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

  update(id: string, userDto: CreateUserDto) {
    return this.userRepository.update({ id }, userDto);
  }

  delete(id: string) {
    return this.userRepository.delete({ id });
  }
}
