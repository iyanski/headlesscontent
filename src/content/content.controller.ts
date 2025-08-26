import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  Query,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiQuery,
} from '@nestjs/swagger';
import { ContentService } from './content.service';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ContentStatus, UserRole } from '@prisma/client';

interface RequestWithUser {
  user: {
    id: string;
    email: string;
    role: UserRole;
    organizationId: string;
  };
}

@ApiTags('Content')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Post()
  @ApiOperation({ summary: 'Create new content' })
  @ApiResponse({ status: 201, description: 'Content created successfully' })
  @ApiResponse({
    status: 409,
    description: 'Content with this slug already exists',
  })
  create(
    @Body() createContentDto: CreateContentDto,
    @Request() req: RequestWithUser,
  ) {
    return this.contentService.create(createContentDto, req.user.id);
  }

  @Get()
  @ApiOperation({ summary: 'Get all content with pagination' })
  @ApiResponse({ status: 200, description: 'List of content' })
  @ApiQuery({
    name: 'contentTypeId',
    required: false,
    description: 'Filter by content type ID',
  })
  @ApiQuery({
    name: 'status',
    required: false,
    enum: ContentStatus,
    description: 'Filter by status',
  })
  @ApiQuery({
    name: 'categoryId',
    required: false,
    description: 'Filter by category ID',
  })
  @ApiQuery({ name: 'tagId', required: false, description: 'Filter by tag ID' })
  @ApiQuery({
    name: 'limit',
    required: false,
    description: 'Number of items per page',
  })
  @ApiQuery({
    name: 'offset',
    required: false,
    description: 'Number of items to skip',
  })
  findAll(
    @Query()
    query: {
      contentTypeId?: string;
      status?: ContentStatus;
      categoryId?: string;
      tagId?: string;
      limit?: number;
      offset?: number;
    },
    @Request() req: RequestWithUser,
  ) {
    return this.contentService.findAll(req.user.organizationId, query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get content by ID' })
  @ApiResponse({ status: 200, description: 'Content found' })
  @ApiResponse({ status: 404, description: 'Content not found' })
  findOne(@Param('id') id: string, @Request() req: RequestWithUser) {
    return this.contentService.findOne(id, req.user.organizationId);
  }

  @Get('slug/:slug')
  @ApiOperation({ summary: 'Get content by slug' })
  @ApiResponse({ status: 200, description: 'Content found' })
  @ApiResponse({ status: 404, description: 'Content not found' })
  findBySlug(@Param('slug') slug: string, @Request() req: RequestWithUser) {
    return this.contentService.findBySlug(slug, req.user.organizationId);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update content' })
  @ApiResponse({ status: 200, description: 'Content updated successfully' })
  @ApiResponse({ status: 404, description: 'Content not found' })
  update(
    @Param('id') id: string,
    @Body() updateContentDto: UpdateContentDto,
    @Request() req: RequestWithUser,
  ) {
    return this.contentService.update(
      id,
      updateContentDto,
      req.user.id,
      req.user.organizationId,
    );
  }

  @Post(':id/publish')
  @ApiOperation({ summary: 'Publish content' })
  @ApiResponse({ status: 200, description: 'Content published successfully' })
  @ApiResponse({ status: 404, description: 'Content not found' })
  publish(@Param('id') id: string, @Request() req: RequestWithUser) {
    return this.contentService.publish(id, req.user.id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete content' })
  @ApiResponse({ status: 200, description: 'Content deleted successfully' })
  @ApiResponse({ status: 404, description: 'Content not found' })
  remove(@Param('id') id: string, @Request() req: RequestWithUser) {
    return this.contentService.remove(id, req.user.organizationId);
  }
}
