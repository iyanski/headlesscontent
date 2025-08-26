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
exports.ContentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
let ContentService = class ContentService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createContentDto, userId) {
        const existingContent = await this.prisma.content.findFirst({
            where: {
                organizationId: createContentDto.organizationId,
                slug: createContentDto.slug,
            },
        });
        if (existingContent) {
            throw new common_1.ConflictException('Content with this slug already exists');
        }
        const contentType = await this.prisma.contentType.findUnique({
            where: { id: createContentDto.contentTypeId },
        });
        if (!contentType) {
            throw new common_1.NotFoundException('Content type not found');
        }
        const contentData = {
            title: createContentDto.title,
            slug: createContentDto.slug,
            content: createContentDto.content,
            contentTypeId: createContentDto.contentTypeId,
            organizationId: createContentDto.organizationId,
            createdBy: userId,
            updatedBy: userId,
        };
        if (createContentDto.categoryIds &&
            createContentDto.categoryIds.length > 0) {
            contentData.categories = {
                create: createContentDto.categoryIds.map((categoryId) => ({
                    categoryId,
                })),
            };
        }
        if (createContentDto.tagIds && createContentDto.tagIds.length > 0) {
            contentData.tags = {
                create: createContentDto.tagIds.map((tagId) => ({
                    tagId,
                })),
            };
        }
        return this.prisma.content.create({
            data: contentData,
            include: {
                contentType: {
                    select: {
                        id: true,
                        name: true,
                        slug: true,
                    },
                },
                organization: {
                    select: {
                        id: true,
                        name: true,
                        slug: true,
                    },
                },
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
                categories: {
                    include: {
                        category: {
                            select: {
                                id: true,
                                name: true,
                                slug: true,
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
                                color: true,
                            },
                        },
                    },
                },
            },
        });
    }
    async findAll(organizationId, query, limit = 10, offset = 0) {
        const where = {
            organizationId,
        };
        if (query?.contentTypeId) {
            where.contentTypeId = query.contentTypeId;
        }
        if (query?.status) {
            where.status = query.status;
        }
        if (query?.categoryId) {
            where.categories = {
                some: {
                    categoryId: query.categoryId,
                },
            };
        }
        if (query?.tagId) {
            where.tags = {
                some: {
                    tagId: query.tagId,
                },
            };
        }
        const [content, total] = await Promise.all([
            this.prisma.content.findMany({
                where,
                skip: offset,
                take: limit,
                orderBy: { createdAt: 'desc' },
                include: {
                    contentType: {
                        select: {
                            id: true,
                            name: true,
                            slug: true,
                        },
                    },
                    organization: {
                        select: {
                            id: true,
                            name: true,
                            slug: true,
                        },
                    },
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
                    categories: {
                        include: {
                            category: {
                                select: {
                                    id: true,
                                    name: true,
                                    slug: true,
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
                                    color: true,
                                },
                            },
                        },
                    },
                },
            }),
            this.prisma.content.count({ where }),
        ]);
        return {
            data: content,
            total,
            page: Math.floor(offset / limit) + 1,
            limit,
            totalPages: Math.ceil(total / limit),
        };
    }
    async findOne(id, organizationId) {
        const content = await this.prisma.content.findUnique({
            where: {
                id,
                organizationId,
            },
            include: {
                contentType: {
                    select: {
                        id: true,
                        name: true,
                        slug: true,
                    },
                },
                organization: {
                    select: {
                        id: true,
                        name: true,
                        slug: true,
                    },
                },
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
                categories: {
                    include: {
                        category: {
                            select: {
                                id: true,
                                name: true,
                                slug: true,
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
                                color: true,
                            },
                        },
                    },
                },
            },
        });
        if (!content) {
            throw new common_1.NotFoundException('Content not found');
        }
        return content;
    }
    async findBySlug(slug, organizationId) {
        const content = await this.prisma.content.findUnique({
            where: {
                organizationId_slug: {
                    organizationId,
                    slug,
                },
            },
            include: {
                contentType: {
                    select: {
                        id: true,
                        name: true,
                        slug: true,
                    },
                },
                organization: {
                    select: {
                        id: true,
                        name: true,
                        slug: true,
                    },
                },
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
                categories: {
                    include: {
                        category: {
                            select: {
                                id: true,
                                name: true,
                                slug: true,
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
                                color: true,
                            },
                        },
                    },
                },
            },
        });
        if (!content) {
            throw new common_1.NotFoundException('Content not found');
        }
        return content;
    }
    async update(id, updateContentDto, userId, organizationId) {
        const existingContent = await this.prisma.content.findUnique({
            where: {
                id,
                organizationId,
            },
        });
        if (!existingContent) {
            throw new common_1.NotFoundException('Content not found');
        }
        if (updateContentDto.slug &&
            updateContentDto.slug !== existingContent.slug) {
            const slugConflict = await this.prisma.content.findFirst({
                where: {
                    organizationId,
                    slug: updateContentDto.slug,
                    id: { not: id },
                },
            });
            if (slugConflict) {
                throw new common_1.ConflictException('Content with this slug already exists');
            }
        }
        await this.prisma.contentCategory.deleteMany({
            where: { contentId: id },
        });
        await this.prisma.contentTag.deleteMany({
            where: { contentId: id },
        });
        const updateData = {
            ...updateContentDto,
            updatedBy: userId,
        };
        if (updateContentDto.categoryIds &&
            updateContentDto.categoryIds.length > 0) {
            updateData.categories = {
                create: updateContentDto.categoryIds.map((categoryId) => ({
                    categoryId,
                })),
            };
        }
        if (updateContentDto.tagIds && updateContentDto.tagIds.length > 0) {
            updateData.tags = {
                create: updateContentDto.tagIds.map((tagId) => ({
                    tagId,
                })),
            };
        }
        return this.prisma.content.update({
            where: {
                id,
                organizationId,
            },
            data: updateData,
            include: {
                contentType: {
                    select: {
                        id: true,
                        name: true,
                        slug: true,
                    },
                },
                organization: {
                    select: {
                        id: true,
                        name: true,
                        slug: true,
                    },
                },
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
                categories: {
                    include: {
                        category: {
                            select: {
                                id: true,
                                name: true,
                                slug: true,
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
                                color: true,
                            },
                        },
                    },
                },
            },
        });
    }
    async publish(id, userId) {
        const content = await this.prisma.content.findUnique({
            where: { id },
        });
        if (!content) {
            throw new common_1.NotFoundException('Content not found');
        }
        return this.prisma.content.update({
            where: { id },
            data: {
                status: client_1.ContentStatus.PUBLISHED,
                publishedAt: new Date(),
                updatedBy: userId,
            },
            include: {
                contentType: {
                    select: {
                        id: true,
                        name: true,
                        slug: true,
                    },
                },
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
                categories: {
                    include: {
                        category: {
                            select: {
                                id: true,
                                name: true,
                                slug: true,
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
                                color: true,
                            },
                        },
                    },
                },
            },
        });
    }
    async remove(id, organizationId) {
        const existingContent = await this.prisma.content.findUnique({
            where: {
                id,
                organizationId,
            },
        });
        if (!existingContent) {
            throw new common_1.NotFoundException('Content not found');
        }
        await this.prisma.content.delete({
            where: {
                id,
                organizationId,
            },
        });
        return { message: 'Content deleted successfully' };
    }
};
exports.ContentService = ContentService;
exports.ContentService = ContentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ContentService);
//# sourceMappingURL=content.service.js.map