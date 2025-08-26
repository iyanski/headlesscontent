import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRole } from '@prisma/client';
interface RequestWithUser {
    user: {
        id: string;
        email: string;
        role: UserRole;
        organizationId: string;
    };
}
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto, req: RequestWithUser): Promise<{
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
    findAll(req: RequestWithUser): Promise<{
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
    findOne(id: string, req: RequestWithUser): Promise<{
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
    update(id: string, updateUserDto: UpdateUserDto, req: RequestWithUser): Promise<{
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
    remove(id: string, req: RequestWithUser): Promise<{
        message: string;
    }>;
}
export {};
