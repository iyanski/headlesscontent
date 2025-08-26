import { PrismaService } from '../prisma/prisma.service';
export declare class PublicService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(query: {
        contentTypeId?: string;
        categoryId?: string;
        tagId?: string;
        limit?: number;
        offset?: number;
        organizationSlug?: string;
    }): Promise<{
        data: ({
            categories: ({
                category: {
                    id: string;
                    name: string;
                    slug: string;
                    description: string | null;
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
                    description: string | null;
                    color: string | null;
                };
            } & {
                id: string;
                createdAt: Date;
                tagId: string;
                contentId: string;
            })[];
            media: ({
                media: {
                    id: string;
                    filename: string;
                    originalName: string;
                    mimeType: string;
                    size: number;
                    url: string;
                };
            } & {
                id: string;
                createdAt: Date;
                contentId: string;
                mediaId: string;
                fieldName: string;
                order: number;
            })[];
            contentType: {
                id: string;
                name: string;
                slug: string;
                description: string | null;
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
        pagination: {
            total: number;
            limit: number;
            offset: number;
            hasMore: boolean;
        };
    }>;
    findOne(id: string, organizationSlug: string): Promise<({
        categories: ({
            category: {
                id: string;
                name: string;
                slug: string;
                description: string | null;
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
                description: string | null;
                color: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            tagId: string;
            contentId: string;
        })[];
        media: ({
            media: {
                id: string;
                filename: string;
                originalName: string;
                mimeType: string;
                size: number;
                url: string;
            };
        } & {
            id: string;
            createdAt: Date;
            contentId: string;
            mediaId: string;
            fieldName: string;
            order: number;
        })[];
        contentType: {
            id: string;
            name: string;
            slug: string;
            description: string | null;
            fields: import("@prisma/client/runtime/library").JsonValue;
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
    }) | null>;
    findBySlug(slug: string, organizationSlug: string): Promise<({
        categories: ({
            category: {
                id: string;
                name: string;
                slug: string;
                description: string | null;
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
                description: string | null;
                color: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            tagId: string;
            contentId: string;
        })[];
        media: ({
            media: {
                id: string;
                filename: string;
                originalName: string;
                mimeType: string;
                size: number;
                url: string;
            };
        } & {
            id: string;
            createdAt: Date;
            contentId: string;
            mediaId: string;
            fieldName: string;
            order: number;
        })[];
        contentType: {
            id: string;
            name: string;
            slug: string;
            description: string | null;
            fields: import("@prisma/client/runtime/library").JsonValue;
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
    }) | null>;
    getCategories(organizationSlug: string): Promise<{
        id: string;
        name: string;
        slug: string;
        description: string | null;
        color: string | null;
    }[]>;
    getTags(organizationSlug: string): Promise<{
        id: string;
        name: string;
        slug: string;
        description: string | null;
        color: string | null;
    }[]>;
    getContentTypes(organizationSlug: string): Promise<{
        id: string;
        name: string;
        slug: string;
        description: string | null;
        fields: import("@prisma/client/runtime/library").JsonValue;
    }[]>;
}
