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
exports.TagsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const tags_service_1 = require("./tags.service");
const create_tag_dto_1 = require("./dto/create-tag.dto");
const update_tag_dto_1 = require("./dto/update-tag.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let TagsController = class TagsController {
    tagsService;
    constructor(tagsService) {
        this.tagsService = tagsService;
    }
    create(createTagDto, req) {
        return this.tagsService.create(createTagDto, req.user.id, req.user.organizationId);
    }
    findAll() {
        return this.tagsService.findAll();
    }
    findOne(id) {
        return this.tagsService.findOne(id);
    }
    findBySlug(slug, req) {
        return this.tagsService.findBySlug(slug, req.user.organizationId);
    }
    getContentByTag(id, query) {
        return this.tagsService.getContentByTag(id, query);
    }
    update(id, updateTagDto, req) {
        return this.tagsService.update(id, updateTagDto, req.user.id);
    }
    remove(id) {
        return this.tagsService.remove(id);
    }
};
exports.TagsController = TagsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new tag' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Tag created successfully' }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Tag already exists' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tag_dto_1.CreateTagDto, Object]),
    __metadata("design:returntype", void 0)
], TagsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all tags' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of tags' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TagsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get tag by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Tag found' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Tag not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TagsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('slug/:slug'),
    (0, swagger_1.ApiOperation)({ summary: 'Get tag by slug' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Tag found' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Tag not found' }),
    __param(0, (0, common_1.Param)('slug')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TagsController.prototype, "findBySlug", null);
__decorate([
    (0, common_1.Get)(':id/content'),
    (0, swagger_1.ApiOperation)({ summary: 'Get content by tag' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Content found' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Tag not found' }),
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
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TagsController.prototype, "getContentByTag", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update tag' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Tag updated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Tag not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tag_dto_1.UpdateTagDto, Object]),
    __metadata("design:returntype", void 0)
], TagsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete tag' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Tag deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Tag not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TagsController.prototype, "remove", null);
exports.TagsController = TagsController = __decorate([
    (0, swagger_1.ApiTags)('Tags'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('tags'),
    __metadata("design:paramtypes", [tags_service_1.TagsService])
], TagsController);
//# sourceMappingURL=tags.controller.js.map