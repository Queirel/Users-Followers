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
exports.ProjectsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const projects_dto_1 = require("../dto/projects.dto");
const projects_service_1 = require("../services/projects.service");
let ProjectsController = exports.ProjectsController = class ProjectsController {
    constructor(projectService) {
        this.projectService = projectService;
    }
    async createProject(body, userId) {
        return await this.projectService.createProject(body, userId);
    }
    async findAllProjects() {
        return await this.projectService.findProjects();
    }
    async findProjectById(id) {
        return await this.projectService.findProjectById(id);
    }
    async updateProject(id, body) {
        return await this.projectService.updateProject(body, id);
    }
    async deleteProject(id) {
        return await this.projectService.deleteProject(id);
    }
};
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'userId',
    }),
    (0, common_1.Post)('create/userOwner/:userId'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [projects_dto_1.ProjectDTO, String]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "createProject", null);
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "findAllProjects", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'projectId',
    }),
    (0, common_1.Get)(':projectId'),
    __param(0, (0, common_1.Param)('projectId', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "findProjectById", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'projectId',
    }),
    (0, common_1.Put)('edit/:projectId'),
    __param(0, (0, common_1.Param)('projectId', new common_1.ParseUUIDPipe())),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, projects_dto_1.ProjectUpdateDTO]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "updateProject", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'projectId',
    }),
    (0, common_1.Delete)('delete/:projectId'),
    __param(0, (0, common_1.Param)('projectId', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "deleteProject", null);
exports.ProjectsController = ProjectsController = __decorate([
    (0, common_1.Controller)('projects'),
    __metadata("design:paramtypes", [projects_service_1.ProjectsService])
], ProjectsController);
//# sourceMappingURL=projects.controller.js.map