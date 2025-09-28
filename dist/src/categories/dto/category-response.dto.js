"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryContentResponseDto = exports.CategoryListResponseDto = exports.CategoryResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CategoryResponseDto {
    id;
    name;
    slug;
    description;
    color;
    organizationId;
    createdAt;
    updatedAt;
}
exports.CategoryResponseDto = CategoryResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'clx1234567890abcdef',
        description: 'Unique identifier for the category'
    }),
    __metadata("design:type", String)
], CategoryResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Technology',
        description: 'The name of the category'
    }),
    __metadata("design:type", String)
], CategoryResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'technology',
        description: 'URL-friendly slug for the category'
    }),
    __metadata("design:type", String)
], CategoryResponseDto.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Technology related content',
        description: 'Description of the category'
    }),
    __metadata("design:type", String)
], CategoryResponseDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: '#3B82F6',
        description: 'Hex color code for the category'
    }),
    __metadata("design:type", String)
], CategoryResponseDto.prototype, "color", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'clx1234567890abcdef',
        description: 'ID of the organization that owns this category'
    }),
    __metadata("design:type", String)
], CategoryResponseDto.prototype, "organizationId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-01-15T10:30:00.000Z',
        description: 'Date and time when the category was created'
    }),
    __metadata("design:type", Date)
], CategoryResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-01-15T10:30:00.000Z',
        description: 'Date and time when the category was last updated'
    }),
    __metadata("design:type", Date)
], CategoryResponseDto.prototype, "updatedAt", void 0);
class CategoryListResponseDto {
    categories;
    total;
}
exports.CategoryListResponseDto = CategoryListResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [CategoryResponseDto],
        description: 'Array of categories'
    }),
    __metadata("design:type", Array)
], CategoryListResponseDto.prototype, "categories", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 10,
        description: 'Total number of categories'
    }),
    __metadata("design:type", Number)
], CategoryListResponseDto.prototype, "total", void 0);
class CategoryContentResponseDto {
    content;
    total;
    limit;
    offset;
}
exports.CategoryContentResponseDto = CategoryContentResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [Object],
        description: 'Array of content items in this category'
    }),
    __metadata("design:type", Array)
], CategoryContentResponseDto.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 25,
        description: 'Total number of content items in this category'
    }),
    __metadata("design:type", Number)
], CategoryContentResponseDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 10,
        description: 'Number of items per page'
    }),
    __metadata("design:type", Number)
], CategoryContentResponseDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 0,
        description: 'Number of items skipped'
    }),
    __metadata("design:type", Number)
], CategoryContentResponseDto.prototype, "offset", void 0);
//# sourceMappingURL=category-response.dto.js.map