import {
  Controller,
  Get,
  Param,
  Query,
  NotFoundException,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiQuery,
  ApiParam,
} from '@nestjs/swagger';
import { PublicService } from './public.service';
import { PublicContentQueryDto } from './dto/public-content-query.dto';
import { ContentStatus } from '@prisma/client';

@ApiTags('Public')
@Controller('public')
export class PublicController {
  constructor(private readonly publicService: PublicService) {}

  @Get('content')
  @ApiOperation({ summary: 'Get all published content with pagination' })
  @ApiResponse({ status: 200, description: 'List of published content' })
  @ApiQuery({
    name: 'contentTypeId',
    required: false,
    description: 'Filter by content type ID',
  })
  @ApiQuery({
    name: 'categoryId',
    required: false,
    description: 'Filter by category ID',
  })
  @ApiQuery({ 
    name: 'tagId', 
    required: false, 
    description: 'Filter by tag ID' 
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    description: 'Number of items per page (default: 10, max: 100)',
  })
  @ApiQuery({
    name: 'offset',
    required: false,
    description: 'Number of items to skip',
  })
  @ApiQuery({
    name: 'organizationSlug',
    required: true,
    description: 'Organization slug to filter content by',
  })
  async findAll(@Query() query: PublicContentQueryDto) {
    return this.publicService.findAll(query);
  }

  @Get('content/:id')
  @ApiOperation({ summary: 'Get published content by ID' })
  @ApiResponse({ status: 200, description: 'Content found' })
  @ApiResponse({ status: 404, description: 'Content not found' })
  @ApiParam({ name: 'id', description: 'Content ID' })
  @ApiQuery({
    name: 'organizationSlug',
    required: true,
    description: 'Organization slug',
  })
  async findOne(
    @Param('id') id: string,
    @Query('organizationSlug') organizationSlug: string,
  ) {
    const content = await this.publicService.findOne(id, organizationSlug);
    if (!content) {
      throw new NotFoundException('Content not found');
    }
    return content;
  }

  @Get('content/slug/:slug')
  @ApiOperation({ summary: 'Get published content by slug' })
  @ApiResponse({ status: 200, description: 'Content found' })
  @ApiResponse({ status: 404, description: 'Content not found' })
  @ApiParam({ name: 'slug', description: 'Content slug' })
  @ApiQuery({
    name: 'organizationSlug',
    required: true,
    description: 'Organization slug',
  })
  async findBySlug(
    @Param('slug') slug: string,
    @Query('organizationSlug') organizationSlug: string,
  ) {
    const content = await this.publicService.findBySlug(slug, organizationSlug);
    if (!content) {
      throw new NotFoundException('Content not found');
    }
    return content;
  }

  @Get('categories')
  @ApiOperation({ summary: 'Get all active categories' })
  @ApiResponse({ status: 200, description: 'List of categories' })
  @ApiQuery({
    name: 'organizationSlug',
    required: true,
    description: 'Organization slug',
  })
  async getCategories(@Query('organizationSlug') organizationSlug: string) {
    return this.publicService.getCategories(organizationSlug);
  }

  @Get('tags')
  @ApiOperation({ summary: 'Get all active tags' })
  @ApiResponse({ status: 200, description: 'List of tags' })
  @ApiQuery({
    name: 'organizationSlug',
    required: true,
    description: 'Organization slug',
  })
  async getTags(@Query('organizationSlug') organizationSlug: string) {
    return this.publicService.getTags(organizationSlug);
  }

  @Get('content-types')
  @ApiOperation({ summary: 'Get all active content types' })
  @ApiResponse({ status: 200, description: 'List of content types' })
  @ApiQuery({
    name: 'organizationSlug',
    required: true,
    description: 'Organization slug',
  })
  async getContentTypes(@Query('organizationSlug') organizationSlug: string) {
    return this.publicService.getContentTypes(organizationSlug);
  }
}
