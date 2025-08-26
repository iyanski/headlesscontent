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
exports.OrganizationsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const organizations_service_1 = require("./organizations.service");
const create_organization_dto_1 = require("./dto/create-organization.dto");
const update_organization_dto_1 = require("./dto/update-organization.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const common_2 = require("@nestjs/common");
let OrganizationsController = class OrganizationsController {
    organizationsService;
    constructor(organizationsService) {
        this.organizationsService = organizationsService;
    }
    create(createOrganizationDto, req) {
        return this.organizationsService.create(createOrganizationDto, req.user.id);
    }
    findAll(req) {
        return this.organizationsService.findAll(req.user.id, req.user.role);
    }
    findOne(id, req) {
        return this.organizationsService.findOne(id, req.user.id, req.user.role, req.user.organizationId);
    }
    findBySlug(slug, req) {
        return this.organizationsService.findBySlug(slug, req.user.id, req.user.role, req.user.organizationId);
    }
    getUsers(id, req) {
        return this.organizationsService.getUsers(id, req.user.id, req.user.role, req.user.organizationId);
    }
    update(id, updateOrganizationDto, req) {
        return this.organizationsService.update(id, updateOrganizationDto, req.user.id, req.user.role, req.user.organizationId);
    }
    remove(id, req) {
        return this.organizationsService.remove(id, req.user.id, req.user.role);
    }
};
exports.OrganizationsController = OrganizationsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new organization' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Organization created successfully',
    }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Organization already exists' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_organization_dto_1.CreateOrganizationDto, Object]),
    __metadata("design:returntype", void 0)
], OrganizationsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all organizations (OWNER only)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of organizations' }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'Forbidden - Only owners can view all organizations',
    }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OrganizationsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get organization by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Organization found' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Organization not found' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden - Access denied' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], OrganizationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('slug/:slug'),
    (0, swagger_1.ApiOperation)({ summary: 'Get organization by slug' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Organization found' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Organization not found' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden - Access denied' }),
    __param(0, (0, common_1.Param)('slug')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], OrganizationsController.prototype, "findBySlug", null);
__decorate([
    (0, common_1.Get)(':id/users'),
    (0, swagger_1.ApiOperation)({ summary: 'Get users in organization' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Users found' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Organization not found' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden - Access denied' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], OrganizationsController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update organization' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Organization updated successfully',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Organization not found' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden - Access denied' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_organization_dto_1.UpdateOrganizationDto, Object]),
    __metadata("design:returntype", void 0)
], OrganizationsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete organization (OWNER only)' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Organization deleted successfully',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Organization not found' }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'Forbidden - Only owners can delete organizations',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], OrganizationsController.prototype, "remove", null);
exports.OrganizationsController = OrganizationsController = __decorate([
    (0, swagger_1.ApiTags)('Organizations'),
    (0, common_1.Controller)('organizations'),
    (0, common_2.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [organizations_service_1.OrganizationsService])
], OrganizationsController);
//# sourceMappingURL=organizations.controller.js.map