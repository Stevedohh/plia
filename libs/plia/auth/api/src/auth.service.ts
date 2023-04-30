import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

import { CreateUserDto, LoginUserDto, UserEntity, UserService } from '@plia/plia/user/api';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(userDto: LoginUserDto) {
    const user = await this.validateUser(userDto);
    return this.generateToken(user);
  }

  async register(userDto: CreateUserDto) {
    const candidate = await this.userService.getByEmail(userDto.email);
    if (candidate && candidate.password) {
      throw new HttpException('This email is already taken', HttpStatus.BAD_REQUEST);
    }

    const hashPassword = await bcrypt.hash(userDto.password, 5);
    const user = await this.userService.create({ ...userDto, password: hashPassword });

    return this.generateToken(user);
  }

  async update(userId: string, userDto: CreateUserDto) {
    const newUser = { ...userDto };

    const candidate = await this.userService.getById(userId);
    if (userDto?.password) {
      newUser.password = await bcrypt.hash(userDto.password, 5);
    }
    await this.userService.update(userId, newUser);

    return this.generateToken({ ...candidate, ...newUser });
  }

  async generateToken(user: UserEntity) {
    const userPayload = { ...user };
    delete userPayload.password;

    return {
      token: this.jwtService.sign(userPayload),
    };
  }

  private async validateUser(userDto: LoginUserDto) {
    const user = await this.userService.getByEmail(userDto.email);
    if (user && user.password) {
      const passwordEquals = await bcrypt.compare(userDto.password, user.password);

      if (passwordEquals) {
        return user;
      }
    }

    throw new UnauthorizedException({ message: 'Wrong password or email' });
  }
}
