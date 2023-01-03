import { Controller, Get, Post, Patch, Param, Delete, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { SiteService } from './site.service';
import { CreateSiteDto } from './dto/create-site.dto';
import { UpdateSiteDto } from './dto/update-site.dto';
import { PublishSiteDto } from './dto/publish-site.dto';

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
  publish(@Param('id') id: string, @Body() publishSiteDto: PublishSiteDto) {
    return this.siteService.publish(id, publishSiteDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all sites' })
  findAll() {
    return this.siteService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get site by id' })
  findOne(@Param('id') id: string) {
    return this.siteService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update site by id' })
  update(@Param('id') id: string, @Body() updateSiteDto: UpdateSiteDto) {
    return this.siteService.update(id, updateSiteDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove site by id' })
  remove(@Param('id') id: string) {
    return this.siteService.remove(id);
  }
}
