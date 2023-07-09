import { IProject } from '../../interfaces/project.interface';
import { BaseEntity } from '../../config/base.entity';
import { UsersProjectsEntity } from '../../users/entities/usersProjects.entity';
export declare class ProjectsEntity extends BaseEntity implements IProject {
    name: string;
    description: string;
    usersIncludes: UsersProjectsEntity[];
}
