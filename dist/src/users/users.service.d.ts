import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRole } from '@prisma/client';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto, userId: string, userRole: UserRole, userOrganizationId: string): Promise<{
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        organization: {
            id: string;
            name: string;
            slug: string;
        };
        email: string;
        username: string;
        firstName: string | null;
        lastName: string | null;
        role: import("@prisma/client").$Enums.UserRole;
        organizationId: string;
    }>;
    findAll(userId: string, userRole: UserRole, userOrganizationId: string): Promise<{
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        organization: {
            id: string;
            name: string;
            slug: string;
        };
        email: string;
        username: string;
        firstName: string | null;
        lastName: string | null;
        role: import("@prisma/client").$Enums.UserRole;
        organizationId: string;
    }[]>;
    findOne(id: string, userId: string, userRole: UserRole, userOrganizationId: string): Promise<{
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        organization: {
            id: string;
            name: string;
            slug: string;
        };
        email: string;
        username: string;
        firstName: string | null;
        lastName: string | null;
        role: import("@prisma/client").$Enums.UserRole;
        organizationId: string;
    }>;
    findByEmail(email: string): Promise<({
        organization: {
            id: string;
            name: string;
            slug: string;
            isActive: boolean;
        };
    } & {
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        username: string;
        password: string;
        firstName: string | null;
        lastName: string | null;
        role: import("@prisma/client").$Enums.UserRole;
        organizationId: string;
    }) | null>;
    update(id: string, updateUserDto: UpdateUserDto, userId: string, userRole: UserRole, userOrganizationId: string): Promise<{
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        organization: {
            id: string;
            name: string;
            slug: string;
        };
        email: string;
        username: string;
        firstName: string | null;
        lastName: string | null;
        role: import("@prisma/client").$Enums.UserRole;
        organizationId: string;
    }>;
    remove(id: string, userId: string, userRole: UserRole, userOrganizationId: string): Promise<{
        message: string;
    }>;
}
