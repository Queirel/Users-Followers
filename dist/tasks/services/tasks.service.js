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
const projects_service_1 = require("../../projects/services/projects.service");
const typeorm_2 = require("typeorm");
const tasks_entity_1 = require("../entities/tasks.entity");
const schedule_1 = require("@nestjs/schedule");
const data_source_1 = require("../../config/data.source");
let TasksService = exports.TasksService = TasksService_1 = class TasksService {
    constructor(taskRepository, projectService) {
        this.taskRepository = taskRepository;
        this.projectService = projectService;
        this.logger = new common_1.Logger(TasksService_1.name);
    }
    async taskSeed() {
        this.logger.debug('Tasks restarted');
        await data_source_1.AppDS.initialize();
        const queryRunner = data_source_1.AppDS.createQueryRunner();
        await queryRunner.query('TRUNCATE TABLE "task" CASCADE');
        await data_source_1.AppDS.destroy();
        const time = (ms) => {
            const now = Date.now() + ms;
            const time = new Date(now);
            return time;
        };
        await this.taskRepository.save([
            {
                task_name: 'Task 1',
                must_start_date: time(20000),
                must_completion_date: time(40000),
            },
            {
                task_name: 'Task 2',
                must_start_date: time(60000),
                must_completion_date: time(80000),
            },
            {
                task_name: 'Task 3',
                must_start_date: time(100000),
                must_completion_date: time(120000),
            },
        ]);
        let i;
        const results = [];
        const tasks = await this.taskRepository.find();
        for (i = 0; i < tasks.length; i++) {
            results.push({
                Name: tasks[i].task_name,
                'Must start date': tasks[i].must_start_date.toUTCString(),
                'Must completion date': tasks[i].must_completion_date.toUTCString(),
                Progress: tasks[i].progress,
                Status: tasks[i].status,
            });
        }
        const times = new Date(Date.now()).toUTCString();
        return { 'Date now': times, Tasks: results.sort };
    }
    async first_task_start() {
        const tasks = await this.taskRepository.find();
        if (!tasks[0].start_date) {
            await this.taskRepository.update(tasks[0].id, {
                start_date: new Date(Date.now()),
                progress: 'IN_PROGRESS',
            });
        }
    }
    async first_task_finish() {
        const tasks = await this.taskRepository.find();
        if (tasks[0].start_date) {
            if (!tasks[0].completion_date) {
                await this.taskRepository.update(tasks[0].id, {
                    completion_date: new Date(Date.now()),
                    progress: 'FINISH',
                });
            }
        }
    }
    async second_task_start() {
        const tasks = await this.taskRepository.find();
        if (!tasks[1].start_date) {
            await this.taskRepository.update(tasks[1].id, {
                start_date: new Date(Date.now()),
                progress: 'IN_PROGRESS',
            });
        }
    }
    async second_task_finish() {
        const tasks = await this.taskRepository.find();
        if (tasks[1].start_date) {
            if (!tasks[1].completion_date) {
                await this.taskRepository.update(tasks[1].id, {
                    completion_date: new Date(Date.now()),
                    progress: 'FINISH',
                });
            }
        }
    }
    async thirth_task_start() {
        const tasks = await this.taskRepository.find();
        if (!tasks[2].start_date) {
            await this.taskRepository.update(tasks[2].id, {
                start_date: new Date(Date.now()),
                progress: 'IN_PROGRESS',
            });
        }
    }
    async thirth_task_finish() {
        const tasks = await this.taskRepository.find();
        if (tasks[2].start_date) {
            if (!tasks[2].completion_date) {
                await this.taskRepository.update(tasks[2].id, {
                    completion_date: new Date(Date.now()),
                    progress: 'FINISH',
                });
            }
        }
    }
    async createTask(body) {
        console.log(body);
        const task = this.taskRepository.create(body);
        console.log(task);
        return await this.taskRepository.save(task);
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
                    await this.taskRepository.update(tasks[i].id, { status: 'LATE' });
                }
            }
            if (!tasks[i].completion_date) {
                const compare_completion = tasks[i].must_completion_date.getTime() - Date.now();
                if (compare_completion < 0) {
                    await this.taskRepository.update(tasks[i].id, { status: 'LATE' });
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
    (0, schedule_1.Interval)(140000),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TasksService.prototype, "taskSeed", null);
__decorate([
    (0, schedule_1.Interval)(+(Math.floor(Math.random() * (30000 - 10000 + 1)) + 10000)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TasksService.prototype, "first_task_start", null);
__decorate([
    (0, schedule_1.Interval)(+(Math.floor(Math.random() * (50000 - 30000 + 1)) + 30000)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TasksService.prototype, "first_task_finish", null);
__decorate([
    (0, schedule_1.Interval)(+(Math.floor(Math.random() * (70000 - 50000 + 1)) + 50000)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TasksService.prototype, "second_task_start", null);
__decorate([
    (0, schedule_1.Interval)(+(Math.floor(Math.random() * (90000 - 70000 + 1)) + 70000)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TasksService.prototype, "second_task_finish", null);
__decorate([
    (0, schedule_1.Interval)(+(Math.floor(Math.random() * (110000 - 90000 + 1)) + 90000)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TasksService.prototype, "thirth_task_start", null);
__decorate([
    (0, schedule_1.Interval)(+(Math.floor(Math.random() * (130000 - 110000 + 1)) + 110000)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TasksService.prototype, "thirth_task_finish", null);
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_SECOND),
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