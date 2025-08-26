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
exports.TagsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TagsService = class TagsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createTagDto, userId, organizationId) {
        const existingTag = await this.prisma.tag.findFirst({
            where: {
                OR: [{ name: createTagDto.name }, { slug: createTagDto.slug }],
            },
        });
        if (existingTag) {
            throw new common_1.ConflictException('Tag with this name or slug already exists');
        }
        return this.prisma.tag.create({
            data: {
                ...createTagDto,
                organizationId,
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
                        content: true,
                    },
                },
            },
        });
    }
    async findAll() {
        return this.prisma.tag.findMany({
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
                        content: true,
                    },
                },
            },
            orderBy: { name: 'asc' },
        });
    }
    async findOne(id) {
        const tag = await this.prisma.tag.findUnique({
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
                        content: true,
                    },
                },
            },
        });
        if (!tag) {
            throw new common_1.NotFoundException('Tag not found');
        }
        return tag;
    }
    async findBySlug(slug, organizationId) {
        const tag = await this.prisma.tag.findUnique({
            where: {
                organizationId_slug: {
                    organizationId,
                    slug,
                },
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
                        content: true,
                    },
                },
            },
        });
        if (!tag) {
            throw new common_1.NotFoundException('Tag not found');
        }
        return tag;
    }
    async update(id, updateTagDto, userId) {
        const tag = await this.prisma.tag.findUnique({
            where: { id },
        });
        if (!tag) {
            throw new common_1.NotFoundException('Tag not found');
        }
        if (updateTagDto.name || updateTagDto.slug) {
            const existingTag = await this.prisma.tag.findFirst({
                where: {
                    OR: [{ name: updateTagDto.name }, { slug: updateTagDto.slug }],
                    NOT: { id },
                },
            });
            if (existingTag) {
                throw new common_1.ConflictException('Tag with this name or slug already exists');
            }
        }
        return this.prisma.tag.update({
            where: { id },
            data: {
                ...updateTagDto,
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
    async remove(id) {
        const tag = await this.prisma.tag.findUnique({
            where: { id },
            include: {
                _count: {
                    select: {
                        content: true,
                    },
                },
            },
        });
        if (!tag) {
            throw new common_1.NotFoundException('Tag not found');
        }
        return this.prisma.tag.update({
            where: { id },
            data: {
                isActive: false,
            },
        });
    }
    async getContentByTag(tagId, query) {
        const tag = await this.prisma.tag.findUnique({
            where: { id: tagId },
        });
        if (!tag) {
            throw new common_1.NotFoundException('Tag not found');
        }
        const limit = query?.limit || 10;
        const offset = query?.offset || 0;
        const [content, total] = await Promise.all([
            this.prisma.content.findMany({
                where: {
                    tags: {
                        some: {
                            tagId,
                        },
                    },
                    status: 'PUBLISHED',
                },
                skip: offset,
                take: limit,
                orderBy: { publishedAt: 'desc' },
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
            this.prisma.content.count({
                where: {
                    tags: {
                        some: {
                            tagId,
                        },
                    },
                    status: 'PUBLISHED',
                },
            }),
        ]);
        return {
            tag,
            content,
            total,
            limit,
            offset,
        };
    }
};
exports.TagsService = TagsService;
exports.TagsService = TagsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TagsService);
//# sourceMappingURL=tags.service.js.map