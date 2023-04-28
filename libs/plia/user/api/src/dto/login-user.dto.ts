import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @IsString()
  @ApiProperty({ example: 'qwerty@qwe.qwe' })
  email: string;

  @IsString()
  @ApiProperty({ example: 'qwerty' })
  password: string;
}
