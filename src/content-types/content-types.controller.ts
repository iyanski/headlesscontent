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
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { ContentTypesService } from './content-types.service';
import { CreateContentTypeDto } from './dto/create-content-type.dto';
import { UpdateContentTypeDto } from './dto/update-content-type.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UserRole } from '@prisma/client';

interface RequestWithUser {
  user: {
    id: string;
    email: string;
    role: UserRole;
    organizationId: string;
  };
}

@ApiTags('Content Types')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('content-types')
export class ContentTypesController {
  constructor(private readonly contentTypesService: ContentTypesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new content type' })
  @ApiResponse({
    status: 201,
    description: 'Content type created successfully',
  })
  @ApiResponse({ status: 409, description: 'Content type already exists' })
  create(
    @Body() createContentTypeDto: CreateContentTypeDto,
    @Request() req: RequestWithUser,
  ) {
    return this.contentTypesService.create(
      createContentTypeDto,
      req.user.id,
      req.user.organizationId,
    );
  }

  @Get()
  @ApiOperation({ summary: 'Get all content types' })
  @ApiResponse({ status: 200, description: 'List of content types' })
  findAll() {
    return this.contentTypesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get content type by ID' })
  @ApiResponse({ status: 200, description: 'Content type found' })
  @ApiResponse({ status: 404, description: 'Content type not found' })
  findOne(@Param('id') id: string) {
    return this.contentTypesService.findOne(id);
  }

  @Get('slug/:slug')
  @ApiOperation({ summary: 'Get content type by slug' })
  @ApiResponse({ status: 200, description: 'Content type found' })
  @ApiResponse({ status: 404, description: 'Content type not found' })
  findBySlug(@Param('slug') slug: string, @Request() req: RequestWithUser) {
    return this.contentTypesService.findBySlug(slug, req.user.organizationId);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update content type' })
  @ApiResponse({
    status: 200,
    description: 'Content type updated successfully',
  })
  @ApiResponse({ status: 404, description: 'Content type not found' })
  update(
    @Param('id') id: string,
    @Body() updateContentTypeDto: UpdateContentTypeDto,
    @Request() req: RequestWithUser,
  ) {
    return this.contentTypesService.update(
      id,
      updateContentTypeDto,
      req.user.id,
    );
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete content type' })
  @ApiResponse({
    status: 200,
    description: 'Content type deleted successfully',
  })
  @ApiResponse({ status: 404, description: 'Content type not found' })
  @ApiResponse({
    status: 409,
    description: 'Cannot delete content type with existing content',
  })
  remove(@Param('id') id: string) {
    return this.contentTypesService.remove(id);
  }
}
