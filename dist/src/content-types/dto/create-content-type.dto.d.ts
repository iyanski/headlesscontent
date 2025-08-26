export declare class FieldDefinitionDto {
    name: string;
    label: string;
    type: string;
    required?: boolean;
    placeholder?: string;
    options?: string[];
}
export declare class CreateContentTypeDto {
    name: string;
    slug: string;
    description?: string;
    fields: FieldDefinitionDto[];
}
