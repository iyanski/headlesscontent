export declare class CategoryResponseDto {
    id: string;
    name: string;
    slug: string;
    description?: string;
    color?: string;
    organizationId: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare class CategoryListResponseDto {
    categories: CategoryResponseDto[];
    total: number;
}
export declare class CategoryContentResponseDto {
    content: any[];
    total: number;
    limit: number;
    offset: number;
}
