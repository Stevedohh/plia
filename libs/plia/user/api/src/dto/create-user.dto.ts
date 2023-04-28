import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsEmail()
  @ApiProperty({ example: 'qwerty@qwe.qwe' })
  email: string;

  @IsString()
  @ApiProperty({ example: 'qwerty' })
  password: string;

  @IsString()
  @ApiProperty({ example: 'Vladyslav Korotkov' })
  full_name: string;

  @IsString()
  @ApiProperty({ example: 'https://s3.amazonaws.com/freecodecamp/relaxing-cat.jpg' })
  img_url: string;
}
