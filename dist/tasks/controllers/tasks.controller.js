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
exports.TasksController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const tasks_create_dto_1 = require("../dto/tasks-create.dto");
const tasks_service_1 = require("../services/tasks.service");
const tasks_update_finish_dto_1 = require("../dto/tasks-update-finish-dto");
const tasks_update_start_dto_1 = require("../dto/tasks-update-start-dto");
let TasksController = exports.TasksController = class TasksController {
    constructor(tasksService) {
        this.tasksService = tasksService;
    }
    async tasksAll() {
        return await this.tasksService.tasksAll();
    }
    async deleteAll() {
        return await this.tasksService.deleteAll();
    }
    async start_Task(id, body) {
        return await this.tasksService.start_Task(body, id);
    }
    async completion_Task(id, body) {
        return await this.tasksService.completion_Task(body, id);
    }
    async createTask(body) {
        return this.tasksService.createTask(body);
    }
};
__decorate([
    (0, swagger_1.ApiTags)('Tasks'),
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "tasksAll", null);
__decorate([
    (0, swagger_1.ApiTags)('Tasks'),
    (0, common_1.Delete)('delete'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "deleteAll", null);
__decorate([
    (0, swagger_1.ApiTags)('Tasks'),
    (0, swagger_1.ApiParam)({
        name: 'id',
    }),
    (0, common_1.Put)('start/:id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, tasks_update_start_dto_1.TasksUpdateStartDTO]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "start_Task", null);
__decorate([
    (0, swagger_1.ApiTags)('Tasks'),
    (0, swagger_1.ApiParam)({
        name: 'id',
    }),
    (0, common_1.Put)('finish/:id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, tasks_update_finish_dto_1.TasksUpdateFinishDTO]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "completion_Task", null);
__decorate([
    (0, swagger_1.ApiTags)('Tasks'),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tasks_create_dto_1.TasksCreateDTO]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "createTask", null);
exports.TasksController = TasksController = __decorate([
    (0, common_1.Controller)('tasks'),
    __metadata("design:paramtypes", [tasks_service_1.TasksService])
], TasksController);
//# sourceMappingURL=tasks.controller.js.map