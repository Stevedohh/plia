import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateSiteDto {
  @IsString()
  @ApiProperty({ example: 'dorik' })
  name: string;

  @ApiProperty({ example: 'dorik.com' })
  url: string;

  @IsString()
  @ApiProperty({ example: 'DORIK' })
  domain: string;
}
