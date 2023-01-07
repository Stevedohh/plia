import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class PublishSiteDto {
  @IsString()
  @ApiProperty({ example: '<h1>Title<h1>' })
  html: string;

  @IsString()
  @ApiProperty({ example: '{font-size: 24px}' })
  css: string;

  @IsString()
  @ApiProperty({ example: 'blog project' })
  name?: string;

  @IsString()
  @ApiProperty({ example: 'vladik' })
  url?: string;
}
