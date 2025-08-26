import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';
import { UserRole } from '@prisma/client';
interface JwtPayload {
    email: string;
    sub: string;
    role: UserRole;
    organizationId: string;
}
declare const JwtStrategy_base: new (...args: any) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private configService;
    private prisma;
    constructor(configService: ConfigService, prisma: PrismaService);
    validate(payload: JwtPayload): Promise<{
        id: string;
        email: string;
        role: import("@prisma/client").$Enums.UserRole;
        organizationId: string;
        organization: {
            id: string;
            name: string;
            slug: string;
            isActive: boolean;
        };
    } | null>;
}
export {};
