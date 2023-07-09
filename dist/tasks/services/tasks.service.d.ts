import { ProjectsService } from '../../projects/services/projects.service';
import { Repository } from 'typeorm';
import { TasksCreateDTO } from '../dto/tasks-create.dto';
import { TasksEntity } from '../entities/tasks.entity';
export declare class TasksService {
    private readonly taskRepository;
    private readonly projectService;
    constructor(taskRepository: Repository<TasksEntity>, projectService: ProjectsService);
    private readonly logger;
    taskSeed(): Promise<{
        'Date now': string;
        Tasks: (compareFn?: (a: any, b: any) => number) => any[];
    }>;
    first_task_start(): Promise<void>;
    first_task_finish(): Promise<void>;
    second_task_start(): Promise<void>;
    second_task_finish(): Promise<void>;
    thirth_task_start(): Promise<void>;
    thirth_task_finish(): Promise<void>;
    createTask(body: TasksCreateDTO): Promise<TasksEntity>;
    tasksAll(): Promise<{
        'Date now': string;
        Tasks: any[];
    }>;
    checkStatus(): Promise<void>;
}
