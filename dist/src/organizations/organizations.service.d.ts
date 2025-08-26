import { PrismaService } from '../prisma/prisma.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { UserRole } from '@prisma/client';
export declare class OrganizationsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createOrganizationDto: CreateOrganizationDto, userId: string): Promise<{
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
    findAll(userId: string, userRole: UserRole): Promise<({
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
    findOne(id: string, userId: string, userRole: UserRole, userOrganizationId: string): Promise<{
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
    findBySlug(slug: string, userId: string, userRole: UserRole, userOrganizationId: string): Promise<{
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
    update(id: string, updateOrganizationDto: UpdateOrganizationDto, userId: string, userRole: UserRole, userOrganizationId: string): Promise<{
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
    remove(id: string, userId: string, userRole: UserRole): Promise<{
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
    getUsers(id: string, userId: string, userRole: UserRole, userOrganizationId: string): Promise<{
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
}
