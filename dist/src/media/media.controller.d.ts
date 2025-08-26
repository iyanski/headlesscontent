import { UploadedFile } from '@nestjs/common';
import { MediaService } from './media.service';
import { UpdateMediaDto } from './dto/update-media.dto';
import { UserRole } from '@prisma/client';
interface UploadedFile {
    originalname: string;
    buffer: Buffer;
    mimetype: string;
    size: number;
}
interface RequestWithUser {
    user: {
        id: string;
        email: string;
        role: UserRole;
        organizationId: string;
    };
}
export declare class MediaController {
    private readonly mediaService;
    constructor(mediaService: MediaService);
    uploadFile(file: UploadedFile, req: RequestWithUser): Promise<{
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
    findAll(query: {
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
    update(id: string, updateMediaDto: UpdateMediaDto, req: RequestWithUser): Promise<{
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
