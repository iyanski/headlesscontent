import { UserRole } from '@prisma/client';
export declare class CreateUserDto {
    email: string;
    username: string;
    password: string;
    firstName?: string;
    lastName?: string;
    role: UserRole;
    organizationId: string;
}
