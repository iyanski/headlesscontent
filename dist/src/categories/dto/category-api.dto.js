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
exports.CategorySwaggerDecorators = void 0;
const swagger_1 = require("@nestjs/swagger");
const category_response_dto_1 = require("./category-response.dto");
class CategorySwaggerDecorators {
    static create() { }
    static findAll() { }
    static findOne() { }
    static findBySlug() { }
    static getContentByCategory() { }
    static update() { }
    static remove() { }
}
exports.CategorySwaggerDecorators = CategorySwaggerDecorators;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create a new category' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Category created successfully',
        type: category_response_dto_1.CategoryResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Category already exists' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CategorySwaggerDecorators, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all categories' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of categories',
        type: category_response_dto_1.CategoryListResponseDto,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CategorySwaggerDecorators, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get category by ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Category found',
        type: category_response_dto_1.CategoryResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Category not found' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CategorySwaggerDecorators, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get category by slug' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Category found',
        type: category_response_dto_1.CategoryResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Category not found' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CategorySwaggerDecorators, "findBySlug", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get content by category' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Content found',
        type: category_response_dto_1.CategoryContentResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Category not found' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CategorySwaggerDecorators, "getContentByCategory", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update category' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Category updated successfully',
        type: category_response_dto_1.CategoryResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Category not found' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CategorySwaggerDecorators, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete category' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Category deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Category not found' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CategorySwaggerDecorators, "remove", null);
//# sourceMappingURL=category-api.dto.js.map