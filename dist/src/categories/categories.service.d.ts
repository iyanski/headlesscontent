import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategoriesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createCategoryDto: CreateCategoryDto, userId: string, organizationId: string): Promise<{
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
        _count: {
            content: number;
        };
    } & {
        name: string;
        slug: string;
        description: string | null;
        color: string | null;
        id: string;
        isActive: boolean;
        organizationId: string;
        createdAt: Date;
        updatedAt: Date;
        createdBy: string;
        updatedBy: string;
    }>;
    findAll(): Promise<({
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
        _count: {
            content: number;
        };
    } & {
        name: string;
        slug: string;
        description: string | null;
        color: string | null;
        id: string;
        isActive: boolean;
        organizationId: string;
        createdAt: Date;
        updatedAt: Date;
        createdBy: string;
        updatedBy: string;
    })[]>;
    findOne(id: string): Promise<{
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
        _count: {
            content: number;
        };
    } & {
        name: string;
        slug: string;
        description: string | null;
        color: string | null;
        id: string;
        isActive: boolean;
        organizationId: string;
        createdAt: Date;
        updatedAt: Date;
        createdBy: string;
        updatedBy: string;
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
        _count: {
            content: number;
        };
    } & {
        name: string;
        slug: string;
        description: string | null;
        color: string | null;
        id: string;
        isActive: boolean;
        organizationId: string;
        createdAt: Date;
        updatedAt: Date;
        createdBy: string;
        updatedBy: string;
    }>;
    update(id: string, updateCategoryDto: UpdateCategoryDto, userId: string): Promise<{
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
    } & {
        name: string;
        slug: string;
        description: string | null;
        color: string | null;
        id: string;
        isActive: boolean;
        organizationId: string;
        createdAt: Date;
        updatedAt: Date;
        createdBy: string;
        updatedBy: string;
    }>;
    remove(id: string): Promise<{
        name: string;
        slug: string;
        description: string | null;
        color: string | null;
        id: string;
        isActive: boolean;
        organizationId: string;
        createdAt: Date;
        updatedAt: Date;
        createdBy: string;
        updatedBy: string;
    }>;
    getContentByCategory(categoryId: string, query?: {
        limit?: number;
        offset?: number;
    }): Promise<{
        category: {
            name: string;
            slug: string;
            description: string | null;
            color: string | null;
            id: string;
            isActive: boolean;
            organizationId: string;
            createdAt: Date;
            updatedAt: Date;
            createdBy: string;
            updatedBy: string;
        };
        content: ({
            creator: {
                id: string;
                username: string;
                firstName: string | null;
                lastName: string | null;
            };
            contentType: {
                name: string;
                slug: string;
                id: string;
            };
            categories: ({
                category: {
                    name: string;
                    slug: string;
                    color: string | null;
                    id: string;
                };
            } & {
                id: string;
                createdAt: Date;
                categoryId: string;
                contentId: string;
            })[];
            tags: ({
                tag: {
                    name: string;
                    slug: string;
                    color: string | null;
                    id: string;
                };
            } & {
                id: string;
                createdAt: Date;
                contentId: string;
                tagId: string;
            })[];
        } & {
            slug: string;
            title: string;
            id: string;
            organizationId: string;
            createdAt: Date;
            updatedAt: Date;
            createdBy: string;
            updatedBy: string;
            content: import("@prisma/client/runtime/library").JsonValue;
            status: import("@prisma/client").$Enums.ContentStatus;
            publishedAt: Date | null;
            contentTypeId: string;
        })[];
        total: number;
        limit: number;
        offset: number;
    }>;
}
