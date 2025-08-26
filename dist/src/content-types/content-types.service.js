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
exports.ContentTypesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ContentTypesService = class ContentTypesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createContentTypeDto, userId, organizationId) {
        const existingContentType = await this.prisma.contentType.findFirst({
            where: {
                OR: [
                    { name: createContentTypeDto.name },
                    { slug: createContentTypeDto.slug },
                ],
            },
        });
        if (existingContentType) {
            throw new common_1.ConflictException('Content type with this name or slug already exists');
        }
        return this.prisma.contentType.create({
            data: {
                ...createContentTypeDto,
                organizationId,
                fields: createContentTypeDto.fields,
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
            },
        });
    }
    async findAll() {
        return this.prisma.contentType.findMany({
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
        });
    }
    async findOne(id) {
        const contentType = await this.prisma.contentType.findUnique({
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
        if (!contentType) {
            throw new common_1.NotFoundException('Content type not found');
        }
        return contentType;
    }
    async findBySlug(slug, organizationId) {
        const contentType = await this.prisma.contentType.findUnique({
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
            },
        });
        if (!contentType) {
            throw new common_1.NotFoundException('Content type not found');
        }
        return contentType;
    }
    async update(id, updateContentTypeDto, userId) {
        const contentType = await this.prisma.contentType.findUnique({
            where: { id },
        });
        if (!contentType) {
            throw new common_1.NotFoundException('Content type not found');
        }
        if (updateContentTypeDto.name || updateContentTypeDto.slug) {
            const existingContentType = await this.prisma.contentType.findFirst({
                where: {
                    OR: [
                        { name: updateContentTypeDto.name },
                        { slug: updateContentTypeDto.slug },
                    ],
                    NOT: { id },
                },
            });
            if (existingContentType) {
                throw new common_1.ConflictException('Content type with this name or slug already exists');
            }
        }
        const updateData = {
            ...updateContentTypeDto,
            updatedBy: userId,
        };
        if (updateContentTypeDto.fields) {
            updateData.fields =
                updateContentTypeDto.fields;
        }
        return this.prisma.contentType.update({
            where: { id },
            data: updateData,
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
        const contentType = await this.prisma.contentType.findUnique({
            where: { id },
            include: {
                _count: {
                    select: {
                        content: true,
                    },
                },
            },
        });
        if (!contentType) {
            throw new common_1.NotFoundException('Content type not found');
        }
        if (contentType._count.content > 0) {
            throw new common_1.ConflictException('Cannot delete content type with existing content');
        }
        await this.prisma.contentType.delete({
            where: { id },
        });
        return { message: 'Content type deleted successfully' };
    }
};
exports.ContentTypesService = ContentTypesService;
exports.ContentTypesService = ContentTypesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ContentTypesService);
//# sourceMappingURL=content-types.service.js.map