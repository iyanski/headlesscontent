import { ContentService } from './content.service';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
import { ContentStatus, UserRole } from '@prisma/client';
interface RequestWithUser {
    user: {
        id: string;
        email: string;
        role: UserRole;
        organizationId: string;
    };
}
export declare class ContentController {
    private readonly contentService;
    constructor(contentService: ContentService);
    create(createContentDto: CreateContentDto, req: RequestWithUser): Promise<{
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
    findAll(query: {
        contentTypeId?: string;
        status?: ContentStatus;
        categoryId?: string;
        tagId?: string;
        limit?: number;
        offset?: number;
    }, req: RequestWithUser): Promise<{
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
    findOne(id: string, req: RequestWithUser): Promise<{
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
    findBySlug(slug: string, req: RequestWithUser): Promise<{
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
    update(id: string, updateContentDto: UpdateContentDto, req: RequestWithUser): Promise<{
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
    publish(id: string, req: RequestWithUser): Promise<{
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
    remove(id: string, req: RequestWithUser): Promise<{
        message: string;
    }>;
}
export {};
