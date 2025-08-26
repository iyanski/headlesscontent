import { OrganizationsService } from './organizations.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { UserRole } from '@prisma/client';
interface RequestWithUser {
    user: {
        id: string;
        email: string;
        role: UserRole;
        organizationId: string;
    };
}
export declare class OrganizationsController {
    private readonly organizationsService;
    constructor(organizationsService: OrganizationsService);
    create(createOrganizationDto: CreateOrganizationDto, req: RequestWithUser): Promise<{
        creator: {
            id: string;
            username: string;
            firstName: string | null;
            lastName: string | null;
        } | null;
        updater: {
            id: string;
            username: string;
            firstName: string | null;
            lastName: string | null;
        } | null;
        _count: {
            users: number;
            contentTypes: number;
            categories: number;
            tags: number;
            content: number;
            media: number;
        };
    } & {
        id: string;
        name: string;
        slug: string;
        description: string | null;
        domain: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        createdBy: string | null;
        updatedBy: string | null;
    }>;
    findAll(req: RequestWithUser): Promise<({
        creator: {
            id: string;
            username: string;
            firstName: string | null;
            lastName: string | null;
        } | null;
        updater: {
            id: string;
            username: string;
            firstName: string | null;
            lastName: string | null;
        } | null;
        _count: {
            users: number;
            contentTypes: number;
            categories: number;
            tags: number;
            content: number;
            media: number;
        };
    } & {
        id: string;
        name: string;
        slug: string;
        description: string | null;
        domain: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        createdBy: string | null;
        updatedBy: string | null;
    })[]>;
    findOne(id: string, req: RequestWithUser): Promise<{
        creator: {
            id: string;
            username: string;
            firstName: string | null;
            lastName: string | null;
        } | null;
        updater: {
            id: string;
            username: string;
            firstName: string | null;
            lastName: string | null;
        } | null;
        _count: {
            users: number;
            contentTypes: number;
            categories: number;
            tags: number;
            content: number;
            media: number;
        };
    } & {
        id: string;
        name: string;
        slug: string;
        description: string | null;
        domain: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        createdBy: string | null;
        updatedBy: string | null;
    }>;
    findBySlug(slug: string, req: RequestWithUser): Promise<{
        creator: {
            id: string;
            username: string;
            firstName: string | null;
            lastName: string | null;
        } | null;
        updater: {
            id: string;
            username: string;
            firstName: string | null;
            lastName: string | null;
        } | null;
        _count: {
            users: number;
            contentTypes: number;
            categories: number;
            tags: number;
            content: number;
            media: number;
        };
    } & {
        id: string;
        name: string;
        slug: string;
        description: string | null;
        domain: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        createdBy: string | null;
        updatedBy: string | null;
    }>;
    getUsers(id: string, req: RequestWithUser): Promise<{
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        username: string;
        firstName: string | null;
        lastName: string | null;
        role: import("@prisma/client").$Enums.UserRole;
    }[]>;
    update(id: string, updateOrganizationDto: UpdateOrganizationDto, req: RequestWithUser): Promise<{
        creator: {
            id: string;
            username: string;
            firstName: string | null;
            lastName: string | null;
        } | null;
        updater: {
            id: string;
            username: string;
            firstName: string | null;
            lastName: string | null;
        } | null;
    } & {
        id: string;
        name: string;
        slug: string;
        description: string | null;
        domain: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        createdBy: string | null;
        updatedBy: string | null;
    }>;
    remove(id: string, req: RequestWithUser): Promise<{
        id: string;
        name: string;
        slug: string;
        description: string | null;
        domain: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        createdBy: string | null;
        updatedBy: string | null;
    }>;
}
export {};
