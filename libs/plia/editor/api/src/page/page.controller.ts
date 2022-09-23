import { Controller, Get, Post, Patch, Param, Delete, Body } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { PageService } from './page.service';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';

@ApiTags('page')
@Controller()
export class PageController {
  constructor(private readonly pageService: PageService) {}

  @Post()
  @ApiOperation({ summary: 'Create page' })
  create(@Param('siteId') siteId: string, @Body() createPageDto: CreatePageDto) {
    return this.pageService.create(siteId, createPageDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all pages by site' })
  findAll(@Param('siteId') siteId: string) {
    return this.pageService.findAll(siteId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find one page' })
  findOne(@Param('siteId') siteId: string, @Param('id') id: string) {
    return this.pageService.findOne(siteId, id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update page' })
  update(
    @Param('siteId') siteId: string,
    @Param('id') id: string,
    @Body() updatePageDto: UpdatePageDto,
  ) {
    return this.pageService.update(siteId, id, updatePageDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove page' })
  remove(@Param('siteId') siteId: string, @Param('id') id: string) {
    return this.pageService.remove(siteId, id);
  }
}
