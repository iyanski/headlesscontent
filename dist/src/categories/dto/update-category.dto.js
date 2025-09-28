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
exports.UpdateCategoryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_category_dto_1 = require("./create-category.dto");
class UpdateCategoryDto extends (0, swagger_1.PartialType)(create_category_dto_1.CreateCategoryDto) {
    name;
    slug;
    description;
    color;
}
exports.UpdateCategoryDto = UpdateCategoryDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Updated Technology',
        description: 'The updated name of the category',
        minLength: 1,
        maxLength: 100,
    }),
    __metadata("design:type", String)
], UpdateCategoryDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 'updated-technology',
        description: 'Updated URL-friendly slug for the category',
        minLength: 1,
        maxLength: 100,
        pattern: '^[a-z0-9-]+$',
    }),
    __metadata("design:type", String)
], UpdateCategoryDto.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Updated technology related content',
        description: 'Updated description of the category',
        maxLength: 500,
    }),
    __metadata("design:type", String)
], UpdateCategoryDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: '#FF6B6B',
        description: 'Updated hex color code for the category',
        pattern: '^#[0-9A-Fa-f]{6}$',
    }),
    __metadata("design:type", String)
], UpdateCategoryDto.prototype, "color", void 0);
//# sourceMappingURL=update-category.dto.js.map