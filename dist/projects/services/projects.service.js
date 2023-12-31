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
exports.ProjectsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const roles_1 = require("../../constants/roles");
const usersProjects_entity_1 = require("../../users/entities/usersProjects.entity");
const users_service_1 = require("../../users/services/users.service");
const typeorm_2 = require("typeorm");
const projects_entity_1 = require("../entities/projects.entity");
let ProjectsService = exports.ProjectsService = class ProjectsService {
    constructor(projectRepository, userProjectRepository, usersService) {
        this.projectRepository = projectRepository;
        this.userProjectRepository = userProjectRepository;
        this.usersService = usersService;
    }
    async createProject(body, userId) {
        try {
            const user = await this.usersService.findUserById(userId);
            const project = await this.projectRepository.save(body);
            return await this.userProjectRepository.save({
                accessLevel: roles_1.ACCESS_LEVEL.OWNER,
                user: user,
                project,
            });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('some error');
        }
    }
    async findProjects() {
        try {
            const projects = await this.projectRepository.find();
            if (projects.length === 0) {
            }
            return projects;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('some error');
        }
    }
    async findProjectById(id) {
        try {
            const project = await this.projectRepository
                .createQueryBuilder('project')
                .where({ id })
                .leftJoinAndSelect('project.usersIncludes', 'usersIncludes')
                .leftJoinAndSelect('usersIncludes.user', 'user')
                .getOne();
            if (!project) {
            }
            return project;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('some error');
        }
    }
    async updateProject(body, id) {
        try {
            const project = await this.projectRepository.update(id, body);
            if (project.affected === 0) {
            }
            return project;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('some error');
        }
    }
    async deleteProject(id) {
        try {
            const project = await this.projectRepository.delete(id);
            if (project.affected === 0) {
            }
            return project;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('some error');
        }
    }
};
exports.ProjectsService = ProjectsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(projects_entity_1.ProjectsEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(usersProjects_entity_1.UsersProjectsEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        users_service_1.UsersService])
], ProjectsService);
//# sourceMappingURL=projects.service.js.map