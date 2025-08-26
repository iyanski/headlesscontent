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
        id: string;
        name: string;
        slug: string;
        description: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        createdBy: string;
        updatedBy: string;
        organizationId: string;
        color: string | null;
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
        id: string;
        name: string;
        slug: string;
        description: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        createdBy: string;
        updatedBy: string;
        organizationId: string;
        color: string | null;
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
        id: string;
        name: string;
        slug: string;
        description: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        createdBy: string;
        updatedBy: string;
        organizationId: string;
        color: string | null;
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
        id: string;
        name: string;
        slug: string;
        description: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        createdBy: string;
        updatedBy: string;
        organizationId: string;
        color: string | null;
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
        id: string;
        name: string;
        slug: string;
        description: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        createdBy: string;
        updatedBy: string;
        organizationId: string;
        color: string | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        slug: string;
        description: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        createdBy: string;
        updatedBy: string;
        organizationId: string;
        color: string | null;
    }>;
    getContentByCategory(categoryId: string, query?: {
        limit?: number;
        offset?: number;
    }): Promise<{
        category: {
            id: string;
            name: string;
            slug: string;
            description: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            createdBy: string;
            updatedBy: string;
            organizationId: string;
            color: string | null;
        };
        content: ({
            creator: {
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
        })[];
        total: number;
        limit: number;
        offset: number;
    }>;
}
