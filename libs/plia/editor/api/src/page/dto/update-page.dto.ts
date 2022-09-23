import { ApiProperty } from '@nestjs/swagger';
import { IsJSON, IsString } from 'class-validator';

import { Structure, StylesStructure } from '@plia/plia/types';

export class UpdatePageDto {
  @IsString()
  @ApiProperty({ example: 'Home' })
  name: string;

  @IsJSON()
  @ApiProperty({ example: [] })
  styles_structure: StylesStructure;

  @IsString()
  @ApiProperty({ example: {} })
  components_structure: Structure;
}
