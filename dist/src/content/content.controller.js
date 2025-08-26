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
exports.ContentController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const content_service_1 = require("./content.service");
const create_content_dto_1 = require("./dto/create-content.dto");
const update_content_dto_1 = require("./dto/update-content.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const client_1 = require("@prisma/client");
let ContentController = class ContentController {
    contentService;
    constructor(contentService) {
        this.contentService = contentService;
    }
    create(createContentDto, req) {
        return this.contentService.create(createContentDto, req.user.id);
    }
    findAll(query, req) {
        return this.contentService.findAll(req.user.organizationId, query);
    }
    findOne(id, req) {
        return this.contentService.findOne(id, req.user.organizationId);
    }
    findBySlug(slug, req) {
        return this.contentService.findBySlug(slug, req.user.organizationId);
    }
    update(id, updateContentDto, req) {
        return this.contentService.update(id, updateContentDto, req.user.id, req.user.organizationId);
    }
    publish(id, req) {
        return this.contentService.publish(id, req.user.id);
    }
    remove(id, req) {
        return this.contentService.remove(id, req.user.organizationId);
    }
};
exports.ContentController = ContentController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create new content' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Content created successfully' }),
    (0, swagger_1.ApiResponse)({
        status: 409,
        description: 'Content with this slug already exists',
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_content_dto_1.CreateContentDto, Object]),
    __metadata("design:returntype", void 0)
], ContentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all content with pagination' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of content' }),
    (0, swagger_1.ApiQuery)({
        name: 'contentTypeId',
        required: false,
        description: 'Filter by content type ID',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'status',
        required: false,
        enum: client_1.ContentStatus,
        description: 'Filter by status',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'categoryId',
        required: false,
        description: 'Filter by category ID',
    }),
    (0, swagger_1.ApiQuery)({ name: 'tagId', required: false, description: 'Filter by tag ID' }),
    (0, swagger_1.ApiQuery)({
        name: 'limit',
        required: false,
        description: 'Number of items per page',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'offset',
        required: false,
        description: 'Number of items to skip',
    }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ContentController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get content by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Content found' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Content not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ContentController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('slug/:slug'),
    (0, swagger_1.ApiOperation)({ summary: 'Get content by slug' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Content found' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Content not found' }),
    __param(0, (0, common_1.Param)('slug')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ContentController.prototype, "findBySlug", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update content' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Content updated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Content not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_content_dto_1.UpdateContentDto, Object]),
    __metadata("design:returntype", void 0)
], ContentController.prototype, "update", null);
__decorate([
    (0, common_1.Post)(':id/publish'),
    (0, swagger_1.ApiOperation)({ summary: 'Publish content' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Content published successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Content not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ContentController.prototype, "publish", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete content' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Content deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Content not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ContentController.prototype, "remove", null);
exports.ContentController = ContentController = __decorate([
    (0, swagger_1.ApiTags)('Content'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('content'),
    __metadata("design:paramtypes", [content_service_1.ContentService])
], ContentController);
//# sourceMappingURL=content.controller.js.map