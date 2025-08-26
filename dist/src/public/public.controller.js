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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const public_service_1 = require("./public.service");
const public_content_query_dto_1 = require("./dto/public-content-query.dto");
let PublicController = class PublicController {
    publicService;
    constructor(publicService) {
        this.publicService = publicService;
    }
    async findAll(query) {
        return this.publicService.findAll(query);
    }
    async findOne(id, organizationSlug) {
        const content = await this.publicService.findOne(id, organizationSlug);
        if (!content) {
            throw new common_1.NotFoundException('Content not found');
        }
        return content;
    }
    async findBySlug(slug, organizationSlug) {
        const content = await this.publicService.findBySlug(slug, organizationSlug);
        if (!content) {
            throw new common_1.NotFoundException('Content not found');
        }
        return content;
    }
    async getCategories(organizationSlug) {
        return this.publicService.getCategories(organizationSlug);
    }
    async getTags(organizationSlug) {
        return this.publicService.getTags(organizationSlug);
    }
    async getContentTypes(organizationSlug) {
        return this.publicService.getContentTypes(organizationSlug);
    }
};
exports.PublicController = PublicController;
__decorate([
    (0, common_1.Get)('content'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all published content with pagination' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of published content' }),
    (0, swagger_1.ApiQuery)({
        name: 'contentTypeId',
        required: false,
        description: 'Filter by content type ID',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'categoryId',
        required: false,
        description: 'Filter by category ID',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'tagId',
        required: false,
        description: 'Filter by tag ID'
    }),
    (0, swagger_1.ApiQuery)({
        name: 'limit',
        required: false,
        description: 'Number of items per page (default: 10, max: 100)',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'offset',
        required: false,
        description: 'Number of items to skip',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'organizationSlug',
        required: true,
        description: 'Organization slug to filter content by',
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [public_content_query_dto_1.PublicContentQueryDto]),
    __metadata("design:returntype", Promise)
], PublicController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('content/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get published content by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Content found' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Content not found' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Content ID' }),
    (0, swagger_1.ApiQuery)({
        name: 'organizationSlug',
        required: true,
        description: 'Organization slug',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('organizationSlug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], PublicController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('content/slug/:slug'),
    (0, swagger_1.ApiOperation)({ summary: 'Get published content by slug' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Content found' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Content not found' }),
    (0, swagger_1.ApiParam)({ name: 'slug', description: 'Content slug' }),
    (0, swagger_1.ApiQuery)({
        name: 'organizationSlug',
        required: true,
        description: 'Organization slug',
    }),
    __param(0, (0, common_1.Param)('slug')),
    __param(1, (0, common_1.Query)('organizationSlug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], PublicController.prototype, "findBySlug", null);
__decorate([
    (0, common_1.Get)('categories'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all active categories' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of categories' }),
    (0, swagger_1.ApiQuery)({
        name: 'organizationSlug',
        required: true,
        description: 'Organization slug',
    }),
    __param(0, (0, common_1.Query)('organizationSlug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PublicController.prototype, "getCategories", null);
__decorate([
    (0, common_1.Get)('tags'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all active tags' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of tags' }),
    (0, swagger_1.ApiQuery)({
        name: 'organizationSlug',
        required: true,
        description: 'Organization slug',
    }),
    __param(0, (0, common_1.Query)('organizationSlug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PublicController.prototype, "getTags", null);
__decorate([
    (0, common_1.Get)('content-types'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all active content types' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of content types' }),
    (0, swagger_1.ApiQuery)({
        name: 'organizationSlug',
        required: true,
        description: 'Organization slug',
    }),
    __param(0, (0, common_1.Query)('organizationSlug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PublicController.prototype, "getContentTypes", null);
exports.PublicController = PublicController = __decorate([
    (0, swagger_1.ApiTags)('Public'),
    (0, common_1.Controller)('public'),
    __metadata("design:paramtypes", [public_service_1.PublicService])
], PublicController);
//# sourceMappingURL=public.controller.js.map