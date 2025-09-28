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
exports.CreateCategoryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateCategoryDto {
    name;
    slug;
    description;
    color;
}
exports.CreateCategoryDto = CreateCategoryDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Technology',
        description: 'The name of the category',
        minLength: 1,
        maxLength: 100,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCategoryDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'technology',
        description: 'URL-friendly slug for the category',
        minLength: 1,
        maxLength: 100,
        pattern: '^[a-z0-9-]+$',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCategoryDto.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Technology related content',
        description: 'Optional description of the category',
        required: false,
        maxLength: 500,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCategoryDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '#3B82F6',
        description: 'Optional hex color code for the category',
        required: false,
        pattern: '^#[0-9A-Fa-f]{6}$',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsHexColor)(),
    __metadata("design:type", String)
], CreateCategoryDto.prototype, "color", void 0);
//# sourceMappingURL=create-category.dto.js.map