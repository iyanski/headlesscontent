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
exports.PublicService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
let PublicService = class PublicService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(query) {
        const { contentTypeId, categoryId, tagId, limit = 10, offset = 0, organizationSlug, } = query;
        const validatedLimit = Math.min(Math.max(limit, 1), 100);
        if (!organizationSlug) {
            throw new common_1.NotFoundException('Organization slug is required');
        }
        const organization = await this.prisma.organization.findUnique({
            where: { slug: organizationSlug },
            select: { id: true },
        });
        if (!organization) {
            throw new common_1.NotFoundException('Organization not found');
        }
        const where = {
            organizationId: organization.id,
            status: client_1.ContentStatus.PUBLISHED,
            publishedAt: { not: null },
        };
        if (contentTypeId) {
            where.contentTypeId = contentTypeId;
        }
        if (categoryId) {
            where.categories = {
                some: {
                    categoryId: categoryId,
                },
            };
        }
        if (tagId) {
            where.tags = {
                some: {
                    tagId: tagId,
                },
            };
        }
        const [content, total] = await Promise.all([
            this.prisma.content.findMany({
                where,
                include: {
                    contentType: {
                        select: {
                            id: true,
                            name: true,
                            slug: true,
                            description: true,
                        },
                    },
                    categories: {
                        include: {
                            category: {
                                select: {
                                    id: true,
                                    name: true,
                                    slug: true,
                                    description: true,
                                    color: true,
                                },
                            },
                        },
                    },
                    tags: {
                        include: {
                            tag: {
                                select: {
                                    id: true,
                                    name: true,
                                    slug: true,
                                    description: true,
                                    color: true,
                                },
                            },
                        },
                    },
                    media: {
                        include: {
                            media: {
                                select: {
                                    id: true,
                                    filename: true,
                                    originalName: true,
                                    mimeType: true,
                                    size: true,
                                    url: true,
                                },
                            },
                        },
                    },
                },
                orderBy: { publishedAt: 'desc' },
                take: validatedLimit,
                skip: offset,
            }),
            this.prisma.content.count({ where }),
        ]);
        return {
            data: content,
            pagination: {
                total,
                limit: validatedLimit,
                offset,
                hasMore: offset + validatedLimit < total,
            },
        };
    }
    async findOne(id, organizationSlug) {
        const organization = await this.prisma.organization.findUnique({
            where: { slug: organizationSlug },
            select: { id: true },
        });
        if (!organization) {
            throw new common_1.NotFoundException('Organization not found');
        }
        return this.prisma.content.findFirst({
            where: {
                id,
                organizationId: organization.id,
                status: client_1.ContentStatus.PUBLISHED,
                publishedAt: { not: null },
            },
            include: {
                contentType: {
                    select: {
                        id: true,
                        name: true,
                        slug: true,
                        description: true,
                        fields: true,
                    },
                },
                categories: {
                    include: {
                        category: {
                            select: {
                                id: true,
                                name: true,
                                slug: true,
                                description: true,
                                color: true,
                            },
                        },
                    },
                },
                tags: {
                    include: {
                        tag: {
                            select: {
                                id: true,
                                name: true,
                                slug: true,
                                description: true,
                                color: true,
                            },
                        },
                    },
                },
                media: {
                    include: {
                        media: {
                            select: {
                                id: true,
                                filename: true,
                                originalName: true,
                                mimeType: true,
                                size: true,
                                url: true,
                            },
                        },
                    },
                },
            },
        });
    }
    async findBySlug(slug, organizationSlug) {
        const organization = await this.prisma.organization.findUnique({
            where: { slug: organizationSlug },
            select: { id: true },
        });
        if (!organization) {
            throw new common_1.NotFoundException('Organization not found');
        }
        return this.prisma.content.findFirst({
            where: {
                slug,
                organizationId: organization.id,
                status: client_1.ContentStatus.PUBLISHED,
                publishedAt: { not: null },
            },
            include: {
                contentType: {
                    select: {
                        id: true,
                        name: true,
                        slug: true,
                        description: true,
                        fields: true,
                    },
                },
                categories: {
                    include: {
                        category: {
                            select: {
                                id: true,
                                name: true,
                                slug: true,
                                description: true,
                                color: true,
                            },
                        },
                    },
                },
                tags: {
                    include: {
                        tag: {
                            select: {
                                id: true,
                                name: true,
                                slug: true,
                                description: true,
                                color: true,
                            },
                        },
                    },
                },
                media: {
                    include: {
                        media: {
                            select: {
                                id: true,
                                filename: true,
                                originalName: true,
                                mimeType: true,
                                size: true,
                                url: true,
                            },
                        },
                    },
                },
            },
        });
    }
    async getCategories(organizationSlug) {
        const organization = await this.prisma.organization.findUnique({
            where: { slug: organizationSlug },
            select: { id: true },
        });
        if (!organization) {
            throw new common_1.NotFoundException('Organization not found');
        }
        return this.prisma.category.findMany({
            where: {
                organizationId: organization.id,
                isActive: true,
            },
            select: {
                id: true,
                name: true,
                slug: true,
                description: true,
                color: true,
            },
            orderBy: { name: 'asc' },
        });
    }
    async getTags(organizationSlug) {
        const organization = await this.prisma.organization.findUnique({
            where: { slug: organizationSlug },
            select: { id: true },
        });
        if (!organization) {
            throw new common_1.NotFoundException('Organization not found');
        }
        return this.prisma.tag.findMany({
            where: {
                organizationId: organization.id,
                isActive: true,
            },
            select: {
                id: true,
                name: true,
                slug: true,
                description: true,
                color: true,
            },
            orderBy: { name: 'asc' },
        });
    }
    async getContentTypes(organizationSlug) {
        const organization = await this.prisma.organization.findUnique({
            where: { slug: organizationSlug },
            select: { id: true },
        });
        if (!organization) {
            throw new common_1.NotFoundException('Organization not found');
        }
        return this.prisma.contentType.findMany({
            where: {
                organizationId: organization.id,
                isActive: true,
            },
            select: {
                id: true,
                name: true,
                slug: true,
                description: true,
                fields: true,
            },
            orderBy: { name: 'asc' },
        });
    }
};
exports.PublicService = PublicService;
exports.PublicService = PublicService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PublicService);
//# sourceMappingURL=public.service.js.map