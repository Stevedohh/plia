import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateSiteDto {
  @IsString()
  @ApiProperty({ example: 'plia' })
  name: string;

  @ApiProperty({ example: 'plia.com' })
  url: string;

  @IsString()
  @ApiProperty({ example: 'PLIA' })
  domain: string;
}
