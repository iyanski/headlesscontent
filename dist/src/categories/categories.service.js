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
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CategoriesService = class CategoriesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createCategoryDto, userId, organizationId) {
        const existingCategory = await this.prisma.category.findFirst({
            where: {
                OR: [
                    { name: createCategoryDto.name },
                    { slug: createCategoryDto.slug },
                ],
            },
        });
        if (existingCategory) {
            throw new common_1.ConflictException('Category with this name or slug already exists');
        }
        return this.prisma.category.create({
            data: {
                ...createCategoryDto,
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
        return this.prisma.category.findMany({
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
        const category = await this.prisma.category.findUnique({
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
        if (!category) {
            throw new common_1.NotFoundException('Category not found');
        }
        return category;
    }
    async findBySlug(slug, organizationId) {
        const category = await this.prisma.category.findUnique({
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
        if (!category) {
            throw new common_1.NotFoundException('Category not found');
        }
        return category;
    }
    async update(id, updateCategoryDto, userId) {
        const category = await this.prisma.category.findUnique({
            where: { id },
        });
        if (!category) {
            throw new common_1.NotFoundException('Category not found');
        }
        if (updateCategoryDto.name || updateCategoryDto.slug) {
            const existingCategory = await this.prisma.category.findFirst({
                where: {
                    OR: [
                        { name: updateCategoryDto.name },
                        { slug: updateCategoryDto.slug },
                    ],
                    NOT: { id },
                },
            });
            if (existingCategory) {
                throw new common_1.ConflictException('Category with this name or slug already exists');
            }
        }
        return this.prisma.category.update({
            where: { id },
            data: {
                ...updateCategoryDto,
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
        const category = await this.prisma.category.findUnique({
            where: { id },
            include: {
                _count: {
                    select: {
                        content: true,
                    },
                },
            },
        });
        if (!category) {
            throw new common_1.NotFoundException('Category not found');
        }
        return this.prisma.category.update({
            where: { id },
            data: {
                isActive: false,
            },
        });
    }
    async getContentByCategory(categoryId, query) {
        const category = await this.prisma.category.findUnique({
            where: { id: categoryId },
        });
        if (!category) {
            throw new common_1.NotFoundException('Category not found');
        }
        const limit = query?.limit || 10;
        const offset = query?.offset || 0;
        const [content, total] = await Promise.all([
            this.prisma.content.findMany({
                where: {
                    categories: {
                        some: {
                            categoryId,
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
                    categories: {
                        some: {
                            categoryId,
                        },
                    },
                    status: 'PUBLISHED',
                },
            }),
        ]);
        return {
            category,
            content,
            total,
            limit,
            offset,
        };
    }
};
exports.CategoriesService = CategoriesService;
exports.CategoriesService = CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CategoriesService);
//# sourceMappingURL=categories.service.js.map