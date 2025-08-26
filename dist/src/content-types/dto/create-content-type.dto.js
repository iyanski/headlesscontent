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
exports.CreateContentTypeDto = exports.FieldDefinitionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class FieldDefinitionDto {
    name;
    label;
    type;
    required;
    placeholder;
    options;
}
exports.FieldDefinitionDto = FieldDefinitionDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'title' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], FieldDefinitionDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Title' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], FieldDefinitionDto.prototype, "label", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'text',
        enum: ['text', 'textarea', 'number', 'boolean', 'date', 'media', 'select'],
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], FieldDefinitionDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true, required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], FieldDefinitionDto.prototype, "required", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Enter the title', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FieldDefinitionDto.prototype, "placeholder", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['option1', 'option2'], required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], FieldDefinitionDto.prototype, "options", void 0);
class CreateContentTypeDto {
    name;
    slug;
    description;
    fields;
}
exports.CreateContentTypeDto = CreateContentTypeDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Blog Post' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateContentTypeDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'blog-post' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateContentTypeDto.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'A blog post content type', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateContentTypeDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [FieldDefinitionDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => FieldDefinitionDto),
    __metadata("design:type", Array)
], CreateContentTypeDto.prototype, "fields", void 0);
//# sourceMappingURL=create-content-type.dto.js.map