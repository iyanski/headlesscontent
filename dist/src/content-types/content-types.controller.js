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
exports.ContentTypesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const content_types_service_1 = require("./content-types.service");
const create_content_type_dto_1 = require("./dto/create-content-type.dto");
const update_content_type_dto_1 = require("./dto/update-content-type.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let ContentTypesController = class ContentTypesController {
    contentTypesService;
    constructor(contentTypesService) {
        this.contentTypesService = contentTypesService;
    }
    create(createContentTypeDto, req) {
        return this.contentTypesService.create(createContentTypeDto, req.user.id, req.user.organizationId);
    }
    findAll() {
        return this.contentTypesService.findAll();
    }
    findOne(id) {
        return this.contentTypesService.findOne(id);
    }
    findBySlug(slug, req) {
        return this.contentTypesService.findBySlug(slug, req.user.organizationId);
    }
    update(id, updateContentTypeDto, req) {
        return this.contentTypesService.update(id, updateContentTypeDto, req.user.id);
    }
    remove(id) {
        return this.contentTypesService.remove(id);
    }
};
exports.ContentTypesController = ContentTypesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new content type' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Content type created successfully',
    }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Content type already exists' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_content_type_dto_1.CreateContentTypeDto, Object]),
    __metadata("design:returntype", void 0)
], ContentTypesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all content types' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of content types' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ContentTypesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get content type by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Content type found' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Content type not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContentTypesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('slug/:slug'),
    (0, swagger_1.ApiOperation)({ summary: 'Get content type by slug' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Content type found' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Content type not found' }),
    __param(0, (0, common_1.Param)('slug')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ContentTypesController.prototype, "findBySlug", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update content type' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Content type updated successfully',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Content type not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_content_type_dto_1.UpdateContentTypeDto, Object]),
    __metadata("design:returntype", void 0)
], ContentTypesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete content type' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Content type deleted successfully',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Content type not found' }),
    (0, swagger_1.ApiResponse)({
        status: 409,
        description: 'Cannot delete content type with existing content',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContentTypesController.prototype, "remove", null);
exports.ContentTypesController = ContentTypesController = __decorate([
    (0, swagger_1.ApiTags)('Content Types'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('content-types'),
    __metadata("design:paramtypes", [content_types_service_1.ContentTypesService])
], ContentTypesController);
//# sourceMappingURL=content-types.controller.js.map