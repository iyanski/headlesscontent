import { PrismaService } from '../prisma/prisma.service';
import { UpdateMediaDto } from './dto/update-media.dto';
interface UploadedFile {
    originalname: string;
    buffer: Buffer;
    mimetype: string;
    size: number;
}
export declare class MediaService {
    private prisma;
    constructor(prisma: PrismaService);
    create(file: UploadedFile, userId: string, organizationId: string): Promise<{
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
        createdAt: Date;
        updatedAt: Date;
        createdBy: string;
        updatedBy: string;
        organizationId: string;
        alt: string | null;
        caption: string | null;
        filename: string;
        originalName: string;
        mimeType: string;
        size: number;
        path: string;
        url: string;
        width: number | null;
        height: number | null;
    }>;
    findAll(query?: {
        limit?: number;
        offset?: number;
    }): Promise<{
        media: ({
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
            createdAt: Date;
            updatedAt: Date;
            createdBy: string;
            updatedBy: string;
            organizationId: string;
            alt: string | null;
            caption: string | null;
            filename: string;
            originalName: string;
            mimeType: string;
            size: number;
            path: string;
            url: string;
            width: number | null;
            height: number | null;
        })[];
        total: number;
        limit: number;
        offset: number;
    }>;
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
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        createdBy: string;
        updatedBy: string;
        organizationId: string;
        alt: string | null;
        caption: string | null;
        filename: string;
        originalName: string;
        mimeType: string;
        size: number;
        path: string;
        url: string;
        width: number | null;
        height: number | null;
    }>;
    update(id: string, updateMediaDto: UpdateMediaDto, userId: string): Promise<{
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
        createdAt: Date;
        updatedAt: Date;
        createdBy: string;
        updatedBy: string;
        organizationId: string;
        alt: string | null;
        caption: string | null;
        filename: string;
        originalName: string;
        mimeType: string;
        size: number;
        path: string;
        url: string;
        width: number | null;
        height: number | null;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
export {};
