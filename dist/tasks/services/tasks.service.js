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
var TasksService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const schedule_1 = require("@nestjs/schedule");
const typeorm_2 = require("typeorm");
const tasks_entity_1 = require("../entities/tasks.entity");
const projects_service_1 = require("../../projects/services/projects.service");
const data_source_1 = require("../../config/data.source");
const email_1 = require("../../utils/email");
email_1.email;
let TasksService = exports.TasksService = TasksService_1 = class TasksService {
    constructor(taskRepository, projectService) {
        this.taskRepository = taskRepository;
        this.projectService = projectService;
        this.logger = new common_1.Logger(TasksService_1.name);
    }
    async createTask(body) {
        console.log(body);
        const task = this.taskRepository.create(body);
        console.log(task);
        return await this.taskRepository.save(task);
    }
    async start_Task(body, id) {
        const task = await this.taskRepository.findOne({ where: { id } });
        await this.taskRepository.update(task.id, {
            start_date: body.start_date,
            progress: 'IN_PROGRESS',
        });
        return await this.taskRepository.findOne({ where: { id } });
    }
    async completion_Task(body, id) {
        const task = await this.taskRepository.findOne({ where: { id } });
        await this.taskRepository.update(task.id, {
            completion_date: body.completion_date,
            progress: 'FINISH',
        });
        return await this.taskRepository.findOne({ where: { id } });
    }
    async deleteAll() {
        await data_source_1.AppDS.initialize();
        const queryRunner = data_source_1.AppDS.createQueryRunner();
        await queryRunner.query('TRUNCATE TABLE "task" CASCADE');
        await data_source_1.AppDS.destroy();
        return 'All tasks deleted';
    }
    async tasksAll() {
        let i;
        const results = [];
        const tasks = await this.taskRepository.find();
        for (i = 0; i < tasks.length; i++) {
            let must_start = null;
            let must_comp = null;
            if (tasks[i].start_date) {
                must_start = tasks[i].start_date.toUTCString();
            }
            if (tasks[i].completion_date) {
                must_comp = tasks[i].completion_date.toUTCString();
            }
            results.push({
                Id: tasks[i].id,
                Name: tasks[i].task_name,
                'Must start date': tasks[i].must_start_date.toUTCString(),
                'Start date': must_start,
                'Must completion date': tasks[i].must_completion_date.toUTCString(),
                'Completion date': must_comp,
                Progress: tasks[i].progress,
                Status: tasks[i].status,
            });
        }
        const time = new Date(Date.now()).toUTCString();
        return {
            'Date now': time,
            Tasks: results.sort(function (a, b) {
                return a.task_name - b.task_name;
            }),
        };
    }
    async checkStatus() {
        let i;
        const tasks = await this.taskRepository.find();
        for (i = 0; i < tasks.length; i++) {
            if (!tasks[i].start_date) {
                const compare_start = tasks[i].must_start_date.getTime() - Date.now();
                if (compare_start < 0) {
                    if (tasks[i].mail_start_send == false) {
                        await this.taskRepository.update(tasks[i].id, {
                            status: 'LATE',
                            mail_start_send: true,
                        });
                        await (0, email_1.email)(tasks[i].email, 'Late task start notice', `The start of your task "${tasks[i].task_name}" is late`);
                    }
                }
            }
            if (!tasks[i].completion_date) {
                const compare_completion = tasks[i].must_completion_date.getTime() - Date.now();
                if (compare_completion < 0) {
                    if (tasks[i].mail_completion_send == false) {
                        await this.taskRepository.update(tasks[i].id, {
                            status: 'LATE',
                            mail_completion_send: true,
                        });
                        await (0, email_1.email)(tasks[i].email, 'Late task completion notice', `The completion of your task "${tasks[i].task_name}" is late`);
                    }
                }
            }
            if (tasks[i].completion_date) {
                if (tasks[i].completion_date.getTime() <
                    tasks[i].must_completion_date.getTime()) {
                    await this.taskRepository.update(tasks[i].id, { status: 'ONTIME' });
                }
            }
        }
    }
};
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_MINUTE),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TasksService.prototype, "checkStatus", null);
exports.TasksService = TasksService = TasksService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tasks_entity_1.TasksEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        projects_service_1.ProjectsService])
], TasksService);
//# sourceMappingURL=tasks.service.js.map