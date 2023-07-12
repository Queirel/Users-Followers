import { Repository } from 'typeorm';
import { TasksCreateDTO } from '../dto/tasks-create.dto';
import { TasksEntity } from '../entities/tasks.entity';
import { ProjectsService } from '../../projects/services/projects.service';
import { TasksUpdateStartDTO } from '../dto/tasks-update-start-dto';
import { TasksUpdateFinishDTO } from '../dto/tasks-update-finish-dto';
export declare class TasksService {
    private readonly taskRepository;
    private readonly projectService;
    constructor(taskRepository: Repository<TasksEntity>, projectService: ProjectsService);
    private readonly logger;
    createTask(body: TasksCreateDTO): Promise<TasksEntity>;
    start_Task(body: TasksUpdateStartDTO, id: string): Promise<TasksEntity>;
    completion_Task(body: TasksUpdateFinishDTO, id: string): Promise<TasksEntity>;
    deleteAll(): Promise<string>;
    tasksAll(): Promise<{
        'Date now': string;
        Tasks: any[];
    }>;
}
