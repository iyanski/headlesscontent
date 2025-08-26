export declare class CreateContentDto {
    title: string;
    slug: string;
    content: Record<string, any>;
    contentTypeId: string;
    organizationId: string;
    categoryIds?: string[];
    tagIds?: string[];
}
