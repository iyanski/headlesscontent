"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
let OrganizationsService = class OrganizationsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createOrganizationDto, userId) {
        const existingOrganization = await this.prisma.organization.findFirst({
            where: {
                OR: [
                    { name: createOrganizationDto.name },
                    { slug: createOrganizationDto.slug },
                ],
            },
        });
        if (existingOrganization) {
            throw new common_1.ConflictException('Organization with this name or slug already exists');
        }
        return this.prisma.organization.create({
            data: {
                ...createOrganizationDto,
                createdBy: userId,
                updatedBy: userId,
            },
            include: {
                creator: {
                    select: {
                        id: true,
                        username: true,
                        firstName: true,
                        lastName: true,
                    },
                },
                updater: {
                    select: {
                        id: true,
                        username: true,
                        firstName: true,
                        lastName: true,
                    },
                },
                _count: {
                    select: {
                        users: true,
                        contentTypes: true,
                        categories: true,
                        tags: true,
                        content: true,
                        media: true,
                    },
                },
            },
        });
    }
    async findAll(userId, userRole) {
        if (userRole !== client_1.UserRole.OWNER) {
            throw new common_1.ForbiddenException('Only owners can view all organizations');
        }
        return this.prisma.organization.findMany({
            where: { isActive: true },
            include: {
                creator: {
                    select: {
                        id: true,
                        username: true,
                        firstName: true,
                        lastName: true,
                    },
                },
                updater: {
                    select: {
                        id: true,
                        username: true,
                        firstName: true,
                        lastName: true,
                    },
                },
                _count: {
                    select: {
                        users: true,
                        contentTypes: true,
                        categories: true,
                        tags: true,
                        content: true,
                        media: true,
                    },
                },
            },
            orderBy: { name: 'asc' },
        });
    }
    async findOne(id, userId, userRole, userOrganizationId) {
        if (userRole !== client_1.UserRole.OWNER && userOrganizationId !== id) {
            throw new common_1.ForbiddenException('You can only access your own organization');
        }
        const organization = await this.prisma.organization.findUnique({
            where: { id },
            include: {
                creator: {
                    select: {
                        id: true,
                        username: true,
                        firstName: true,
                        lastName: true,
                    },
                },
                updater: {
                    select: {
                        id: true,
                        username: true,
                        firstName: true,
                        lastName: true,
                    },
                },
                _count: {
                    select: {
                        users: true,
                        contentTypes: true,
                        categories: true,
                        tags: true,
                        content: true,
                        media: true,
                    },
                },
            },
        });
        if (!organization) {
            throw new common_1.NotFoundException('Organization not found');
        }
        return organization;
    }
    async findBySlug(slug, userId, userRole, userOrganizationId) {
        const organization = await this.prisma.organization.findUnique({
            where: { slug },
            include: {
                creator: {
                    select: {
                        id: true,
                        username: true,
                        firstName: true,
                        lastName: true,
                    },
                },
                updater: {
                    select: {
                        id: true,
                        username: true,
                        firstName: true,
                        lastName: true,
                    },
                },
                _count: {
                    select: {
                        users: true,
                        contentTypes: true,
                        categories: true,
                        tags: true,
                        content: true,
                        media: true,
                    },
                },
            },
        });
        if (!organization) {
            throw new common_1.NotFoundException('Organization not found');
        }
        if (userRole !== client_1.UserRole.OWNER && userOrganizationId !== organization.id) {
            throw new common_1.ForbiddenException('You can only access your own organization');
        }
        return organization;
    }
    async update(id, updateOrganizationDto, userId, userRole, userOrganizationId) {
        if (userRole !== client_1.UserRole.OWNER && userOrganizationId !== id) {
            throw new common_1.ForbiddenException('You can only update your own organization');
        }
        const organization = await this.prisma.organization.findUnique({
            where: { id },
        });
        if (!organization) {
            throw new common_1.NotFoundException('Organization not found');
        }
        if (updateOrganizationDto.name || updateOrganizationDto.slug) {
            const existingOrganization = await this.prisma.organization.findFirst({
                where: {
                    OR: [
                        { name: updateOrganizationDto.name },
                        { slug: updateOrganizationDto.slug },
                    ],
                    NOT: { id },
                },
            });
            if (existingOrganization) {
                throw new common_1.ConflictException('Organization with this name or slug already exists');
            }
        }
        return this.prisma.organization.update({
            where: { id },
            data: {
                ...updateOrganizationDto,
                updatedBy: userId,
            },
            include: {
                creator: {
                    select: {
                        id: true,
                        username: true,
                        firstName: true,
                        lastName: true,
                    },
                },
                updater: {
                    select: {
                        id: true,
                        username: true,
                        firstName: true,
                        lastName: true,
                    },
                },
            },
        });
    }
    async remove(id, userId, userRole) {
        if (userRole !== client_1.UserRole.OWNER) {
            throw new common_1.ForbiddenException('Only owners can delete organizations');
        }
        const organization = await this.prisma.organization.findUnique({
            where: { id },
            include: {
                _count: {
                    select: {
                        users: true,
                        contentTypes: true,
                        categories: true,
                        tags: true,
                        content: true,
                        media: true,
                    },
                },
            },
        });
        if (!organization) {
            throw new common_1.NotFoundException('Organization not found');
        }
        return this.prisma.organization.update({
            where: { id },
            data: {
                isActive: false,
            },
        });
    }
    async getUsers(id, userId, userRole, userOrganizationId) {
        if (userRole !== client_1.UserRole.OWNER && userOrganizationId !== id) {
            throw new common_1.ForbiddenException('You can only access users in your own organization');
        }
        const organization = await this.prisma.organization.findUnique({
            where: { id },
        });
        if (!organization) {
            throw new common_1.NotFoundException('Organization not found');
        }
        return this.prisma.user.findMany({
            where: { organizationId: id },
            select: {
                id: true,
                email: true,
                username: true,
                firstName: true,
                lastName: true,
                role: true,
                isActive: true,
                createdAt: true,
                updatedAt: true,
            },
            orderBy: { createdAt: 'desc' },
        });
    }
};
exports.OrganizationsService = OrganizationsService;
exports.OrganizationsService = OrganizationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OrganizationsService);
//# sourceMappingURL=organizations.service.js.map