import { STATUS_TASK } from '../../constants/status-task';
import { ProjectsEntity } from '../../projects/entities/projects.entity';
import { BaseEntity } from '../../config/base.entity';
export declare class TasksEntity extends BaseEntity {
    task_name: string;
    task_description: string;
    status: STATUS_TASK;
    must_start_date: Date;
    start_date: Date;
    must_completion_date: Date;
    completion_date: Date;
    project: ProjectsEntity;
}
