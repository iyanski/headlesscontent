import { PrismaService } from '../prisma/prisma.service';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
import { ContentStatus } from '@prisma/client';
interface ContentQuery {
    contentTypeId?: string;
    status?: ContentStatus;
    categoryId?: string;
    tagId?: string;
    limit?: number;
    offset?: number;
}
export declare class ContentService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createContentDto: CreateContentDto, userId: string): Promise<{
        creator: {
            id: string;
            username: string;
            firstName: string | null;
            lastName: string | null;
        };
        updater: {
            id: string;
            username: string;
            firstName: string | null;
            lastName: string | null;
        };
        categories: ({
            category: {
                id: string;
                name: string;
                slug: string;
                color: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            categoryId: string;
            contentId: string;
        })[];
        tags: ({
            tag: {
                id: string;
                name: string;
                slug: string;
                color: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            tagId: string;
            contentId: string;
        })[];
        organization: {
            id: string;
            name: string;
            slug: string;
        };
        contentType: {
            id: string;
            name: string;
            slug: string;
        };
    } & {
        id: string;
        slug: string;
        createdAt: Date;
        updatedAt: Date;
        content: import("@prisma/client/runtime/library").JsonValue;
        createdBy: string;
        updatedBy: string;
        organizationId: string;
        title: string;
        status: import("@prisma/client").$Enums.ContentStatus;
        publishedAt: Date | null;
        contentTypeId: string;
    }>;
    findAll(organizationId: string, query?: ContentQuery, limit?: number, offset?: number): Promise<{
        data: ({
            creator: {
                id: string;
                username: string;
                firstName: string | null;
                lastName: string | null;
            };
            updater: {
                id: string;
                username: string;
                firstName: string | null;
                lastName: string | null;
            };
            categories: ({
                category: {
                    id: string;
                    name: string;
                    slug: string;
                    color: string | null;
                };
            } & {
                id: string;
                createdAt: Date;
                categoryId: string;
                contentId: string;
            })[];
            tags: ({
                tag: {
                    id: string;
                    name: string;
                    slug: string;
                    color: string | null;
                };
            } & {
                id: string;
                createdAt: Date;
                tagId: string;
                contentId: string;
            })[];
            organization: {
                id: string;
                name: string;
                slug: string;
            };
            contentType: {
                id: string;
                name: string;
                slug: string;
            };
        } & {
            id: string;
            slug: string;
            createdAt: Date;
            updatedAt: Date;
            content: import("@prisma/client/runtime/library").JsonValue;
            createdBy: string;
            updatedBy: string;
            organizationId: string;
            title: string;
            status: import("@prisma/client").$Enums.ContentStatus;
            publishedAt: Date | null;
            contentTypeId: string;
        })[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    findOne(id: string, organizationId: string): Promise<{
        creator: {
            id: string;
            username: string;
            firstName: string | null;
            lastName: string | null;
        };
        updater: {
            id: string;
            username: string;
            firstName: string | null;
            lastName: string | null;
        };
        categories: ({
            category: {
                id: string;
                name: string;
                slug: string;
                color: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            categoryId: string;
            contentId: string;
        })[];
        tags: ({
            tag: {
                id: string;
                name: string;
                slug: string;
                color: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            tagId: string;
            contentId: string;
        })[];
        organization: {
            id: string;
            name: string;
            slug: string;
        };
        contentType: {
            id: string;
            name: string;
            slug: string;
        };
    } & {
        id: string;
        slug: string;
        createdAt: Date;
        updatedAt: Date;
        content: import("@prisma/client/runtime/library").JsonValue;
        createdBy: string;
        updatedBy: string;
        organizationId: string;
        title: string;
        status: import("@prisma/client").$Enums.ContentStatus;
        publishedAt: Date | null;
        contentTypeId: string;
    }>;
    findBySlug(slug: string, organizationId: string): Promise<{
        creator: {
            id: string;
            username: string;
            firstName: string | null;
            lastName: string | null;
        };
        updater: {
            id: string;
            username: string;
            firstName: string | null;
            lastName: string | null;
        };
        categories: ({
            category: {
                id: string;
                name: string;
                slug: string;
                color: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            categoryId: string;
            contentId: string;
        })[];
        tags: ({
            tag: {
                id: string;
                name: string;
                slug: string;
                color: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            tagId: string;
            contentId: string;
        })[];
        organization: {
            id: string;
            name: string;
            slug: string;
        };
        contentType: {
            id: string;
            name: string;
            slug: string;
        };
    } & {
        id: string;
        slug: string;
        createdAt: Date;
        updatedAt: Date;
        content: import("@prisma/client/runtime/library").JsonValue;
        createdBy: string;
        updatedBy: string;
        organizationId: string;
        title: string;
        status: import("@prisma/client").$Enums.ContentStatus;
        publishedAt: Date | null;
        contentTypeId: string;
    }>;
    update(id: string, updateContentDto: UpdateContentDto, userId: string, organizationId: string): Promise<{
        creator: {
            id: string;
            username: string;
            firstName: string | null;
            lastName: string | null;
        };
        updater: {
            id: string;
            username: string;
            firstName: string | null;
            lastName: string | null;
        };
        categories: ({
            category: {
                id: string;
                name: string;
                slug: string;
                color: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            categoryId: string;
            contentId: string;
        })[];
        tags: ({
            tag: {
                id: string;
                name: string;
                slug: string;
                color: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            tagId: string;
            contentId: string;
        })[];
        organization: {
            id: string;
            name: string;
            slug: string;
        };
        contentType: {
            id: string;
            name: string;
            slug: string;
        };
    } & {
        id: string;
        slug: string;
        createdAt: Date;
        updatedAt: Date;
        content: import("@prisma/client/runtime/library").JsonValue;
        createdBy: string;
        updatedBy: string;
        organizationId: string;
        title: string;
        status: import("@prisma/client").$Enums.ContentStatus;
        publishedAt: Date | null;
        contentTypeId: string;
    }>;
    publish(id: string, userId: string): Promise<{
        creator: {
            id: string;
            username: string;
            firstName: string | null;
            lastName: string | null;
        };
        updater: {
            id: string;
            username: string;
            firstName: string | null;
            lastName: string | null;
        };
        categories: ({
            category: {
                id: string;
                name: string;
                slug: string;
                color: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            categoryId: string;
            contentId: string;
        })[];
        tags: ({
            tag: {
                id: string;
                name: string;
                slug: string;
                color: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            tagId: string;
            contentId: string;
        })[];
        contentType: {
            id: string;
            name: string;
            slug: string;
        };
    } & {
        id: string;
        slug: string;
        createdAt: Date;
        updatedAt: Date;
        content: import("@prisma/client/runtime/library").JsonValue;
        createdBy: string;
        updatedBy: string;
        organizationId: string;
        title: string;
        status: import("@prisma/client").$Enums.ContentStatus;
        publishedAt: Date | null;
        contentTypeId: string;
    }>;
    remove(id: string, organizationId: string): Promise<{
        message: string;
    }>;
}
export {};
