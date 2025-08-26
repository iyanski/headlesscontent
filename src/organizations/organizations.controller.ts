import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { OrganizationsService } from './organizations.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { UserRole } from '@prisma/client';

interface RequestWithUser {
  user: {
    id: string;
    email: string;
    role: UserRole;
    organizationId: string;
  };
}

@ApiTags('Organizations')
@Controller('organizations')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class OrganizationsController {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new organization' })
  @ApiResponse({
    status: 201,
    description: 'Organization created successfully',
  })
  @ApiResponse({ status: 409, description: 'Organization already exists' })
  create(
    @Body() createOrganizationDto: CreateOrganizationDto,
    @Request() req: RequestWithUser,
  ) {
    return this.organizationsService.create(createOrganizationDto, req.user.id);
  }

  @Get()
  @ApiOperation({ summary: 'Get all organizations (OWNER only)' })
  @ApiResponse({ status: 200, description: 'List of organizations' })
  @ApiResponse({
    status: 403,
    description: 'Forbidden - Only owners can view all organizations',
  })
  findAll(@Request() req: RequestWithUser) {
    return this.organizationsService.findAll(req.user.id, req.user.role);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get organization by ID' })
  @ApiResponse({ status: 200, description: 'Organization found' })
  @ApiResponse({ status: 404, description: 'Organization not found' })
  @ApiResponse({ status: 403, description: 'Forbidden - Access denied' })
  findOne(@Param('id') id: string, @Request() req: RequestWithUser) {
    return this.organizationsService.findOne(
      id,
      req.user.id,
      req.user.role,
      req.user.organizationId,
    );
  }

  @Get('slug/:slug')
  @ApiOperation({ summary: 'Get organization by slug' })
  @ApiResponse({ status: 200, description: 'Organization found' })
  @ApiResponse({ status: 404, description: 'Organization not found' })
  @ApiResponse({ status: 403, description: 'Forbidden - Access denied' })
  findBySlug(@Param('slug') slug: string, @Request() req: RequestWithUser) {
    return this.organizationsService.findBySlug(
      slug,
      req.user.id,
      req.user.role,
      req.user.organizationId,
    );
  }

  @Get(':id/users')
  @ApiOperation({ summary: 'Get users in organization' })
  @ApiResponse({ status: 200, description: 'Users found' })
  @ApiResponse({ status: 404, description: 'Organization not found' })
  @ApiResponse({ status: 403, description: 'Forbidden - Access denied' })
  getUsers(@Param('id') id: string, @Request() req: RequestWithUser) {
    return this.organizationsService.getUsers(
      id,
      req.user.id,
      req.user.role,
      req.user.organizationId,
    );
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update organization' })
  @ApiResponse({
    status: 200,
    description: 'Organization updated successfully',
  })
  @ApiResponse({ status: 404, description: 'Organization not found' })
  @ApiResponse({ status: 403, description: 'Forbidden - Access denied' })
  update(
    @Param('id') id: string,
    @Body() updateOrganizationDto: UpdateOrganizationDto,
    @Request() req: RequestWithUser,
  ) {
    return this.organizationsService.update(
      id,
      updateOrganizationDto,
      req.user.id,
      req.user.role,
      req.user.organizationId,
    );
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete organization (OWNER only)' })
  @ApiResponse({
    status: 200,
    description: 'Organization deleted successfully',
  })
  @ApiResponse({ status: 404, description: 'Organization not found' })
  @ApiResponse({
    status: 403,
    description: 'Forbidden - Only owners can delete organizations',
  })
  remove(@Param('id') id: string, @Request() req: RequestWithUser) {
    return this.organizationsService.remove(id, req.user.id, req.user.role);
  }
}
