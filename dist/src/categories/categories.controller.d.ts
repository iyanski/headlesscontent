import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryContentQueryDto } from './dto/category-content-query.dto';
import { UserRole } from '@prisma/client';
interface RequestWithUser {
    user: {
        id: string;
        email: string;
        role: UserRole;
        organizationId: string;
    };
}
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    create(createCategoryDto: CreateCategoryDto, req: RequestWithUser): Promise<{
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
        color: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
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
        id: string;
        name: string;
        slug: string;
        description: string | null;
        color: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
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
        id: string;
        name: string;
        slug: string;
        description: string | null;
        color: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        createdBy: string;
        updatedBy: string;
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
        _count: {
            content: number;
        };
    } & {
        id: string;
        name: string;
        slug: string;
        description: string | null;
        color: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        createdBy: string;
        updatedBy: string;
    }>;
    getContentByCategory(id: string, query: CategoryContentQueryDto): Promise<{
        category: {
            id: string;
            name: string;
            slug: string;
            description: string | null;
            color: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            organizationId: string;
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
                id: string;
                name: string;
                slug: string;
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
                contentId: string;
                tagId: string;
            })[];
        } & {
            id: string;
            slug: string;
            createdAt: Date;
            updatedAt: Date;
            content: import("@prisma/client/runtime/library").JsonValue;
            organizationId: string;
            createdBy: string;
            updatedBy: string;
            title: string;
            status: import("@prisma/client").$Enums.ContentStatus;
            publishedAt: Date | null;
            contentTypeId: string;
        })[];
        total: number;
        limit: number;
        offset: number;
    }>;
    update(id: string, updateCategoryDto: UpdateCategoryDto, req: RequestWithUser): Promise<{
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
        color: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        createdBy: string;
        updatedBy: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        slug: string;
        description: string | null;
        color: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        createdBy: string;
        updatedBy: string;
    }>;
}
export {};
