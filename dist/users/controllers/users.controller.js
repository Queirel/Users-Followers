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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_dto_1 = require("../dto/user.dto");
const users_service_1 = require("../services/users.service");
let UsersController = exports.UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async registerUser(body) {
        return await this.usersService.createUser(body);
    }
    async seedUser(body) {
        return await this.usersService.seedUser(body);
    }
    async findUsers() {
        return await this.usersService.findUsers();
    }
    async findAllUsers() {
        return await this.usersService.findAllUsers();
    }
    async findAlliUsers() {
        return await this.usersService.findAlliUsers();
    }
    async firstFive() {
        return await this.usersService.firstFive();
    }
    async findUserById(id) {
        return await this.usersService.findUserById(id);
    }
    async addToProject(body, id) {
        return await this.usersService.relationToProject(Object.assign(Object.assign({}, body), { project: id }));
    }
    async updateUser(id, body) {
        return await this.usersService.updateUser(body, id);
    }
    async deleteUser(id) {
        return await this.usersService.deleteUser(id);
    }
};
__decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "registerUser", null);
__decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.Post)('seed'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.QuantityDTO]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "seedUser", null);
__decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findUsers", null);
__decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.Get)('allUsers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAllUsers", null);
__decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.Get)('alli'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAlliUsers", null);
__decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.Get)('five'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "firstFive", null);
__decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, swagger_1.ApiParam)({
        name: 'id',
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'No se encontro resultado',
    }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findUserById", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'projectId',
    }),
    (0, common_1.Post)('add-to-project/:projectId'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('projectId', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserToProjectDTO, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "addToProject", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
    }),
    (0, common_1.Put)('edit/:id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_dto_1.UserUpdateDTO]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUser", null);
__decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, swagger_1.ApiParam)({
        name: 'id',
    }),
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteUser", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map