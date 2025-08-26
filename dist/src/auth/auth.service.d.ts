import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { UserRole } from '@prisma/client';
interface UserWithOrganization {
    id: string;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    role: UserRole;
    isActive: boolean;
    organizationId: string;
    organization: {
        id: string;
        name: string;
        slug: string;
        isActive: boolean;
    };
}
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<UserWithOrganization | null>;
    login(loginDto: LoginDto): Promise<{
        access_token: string;
        user: {
            id: string;
            email: string;
            username: string;
            firstName: string;
            lastName: string;
            role: import("@prisma/client").$Enums.UserRole;
            organization: {
                id: string;
                name: string;
                slug: string;
                isActive: boolean;
            };
        };
    }>;
}
export {};
