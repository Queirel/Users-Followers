import { TasksCreateDTO } from '../dto/tasks-create.dto';
import { TasksService } from '../services/tasks.service';
import { TasksUpdateFinishDTO } from '../dto/tasks-update-finish-dto';
import { TasksUpdateStartDTO } from '../dto/tasks-update-start-dto';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    tasksAll(): Promise<{
        'Date now': string;
        Tasks: any[];
    }>;
    deleteAll(): Promise<string>;
    start_Task(id: string, body: TasksUpdateStartDTO): Promise<import("../entities/tasks.entity").TasksEntity>;
    completion_Task(id: string, body: TasksUpdateFinishDTO): Promise<import("../entities/tasks.entity").TasksEntity>;
    createTask(body: TasksCreateDTO): Promise<import("../entities/tasks.entity").TasksEntity>;
}
