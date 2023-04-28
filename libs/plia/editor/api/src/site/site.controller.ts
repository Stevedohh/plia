import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Delete,
  Body,
  HttpException,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { PG_ERROR_CODES } from '@plia/plia/types';
import { JwtAuthGuard } from '@plia/plia/auth/api';

import { SiteService } from './site.service';
import { CreateSiteDto } from './dto/create-site.dto';
import { UpdateSiteDto } from './dto/update-site.dto';
import { PublishSiteDto } from './dto/publish-site.dto';

@UseGuards(JwtAuthGuard)
@ApiTags('site')
@Controller()
export class SiteController {
  constructor(private readonly siteService: SiteService) {}

  @Post()
  @ApiOperation({ summary: 'Create site' })
  @ApiResponse({ status: 201, description: 'OK.' })
  create(@Body() createSiteDto: CreateSiteDto) {
    return this.siteService.create(createSiteDto);
  }

  @Post(':id/publish')
  @ApiOperation({ summary: 'Publish site' })
  @ApiResponse({ status: 201, description: 'OK.' })
  async publish(@Param('id') id: string, @Body() publishSiteDto: PublishSiteDto) {
    try {
      return await this.siteService.publish(id, publishSiteDto);
    } catch (err) {
      if (err.code === PG_ERROR_CODES.UNIQUE_COLUMN) {
        throw new HttpException(
          { message: 'This url already exists', ...err },
          HttpStatus.CONFLICT,
        );
      }

      throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get()
  @ApiOperation({ summary: 'Get all user sites' })
  findAll() {
    return this.siteService.findAllByUser();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get site by id' })
  findOne(@Param('id') id: string) {
    return this.siteService.findOneByUser(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update site by id' })
  async update(@Param('id') id: string, @Body() updateSiteDto: UpdateSiteDto) {
    try {
      return await this.siteService.update(id, updateSiteDto);
    } catch (err) {
      if (err.code === PG_ERROR_CODES.UNIQUE_COLUMN) {
        throw new HttpException(
          { message: 'This url already exists', ...err },
          HttpStatus.CONFLICT,
        );
      }

      throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove site by id' })
  remove(@Param('id') id: string) {
    return this.siteService.remove(id);
  }
}
