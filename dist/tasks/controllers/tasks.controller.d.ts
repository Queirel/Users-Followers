import { TasksCreateDTO } from '../dto/tasks-create.dto';
import { TasksService } from '../services/tasks.service';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    taskSeed(): Promise<{
        'Date now': string;
        Tasks: (compareFn?: (a: any, b: any) => number) => any[];
    }>;
    tasksAll(): Promise<{
        'Date now': string;
        Tasks: any[];
    }>;
    createTask(body: TasksCreateDTO): Promise<import("../entities/tasks.entity").TasksEntity>;
}
