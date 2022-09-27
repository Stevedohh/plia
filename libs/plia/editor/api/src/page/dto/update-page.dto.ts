import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

import { Structure, StylesStructure } from '@plia/plia/types';

export class UpdatePageDto {
  @IsString()
  @ApiProperty({ example: 'Home' })
  name: string;

  @ApiProperty({ example: [] })
  styles_structure: StylesStructure;

  @ApiProperty({ example: {} })
  components_structure: Structure;
}
