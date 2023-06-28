import { BaseEntity } from '../../config/base.entity';
import { UsersEntity } from './users.entity';
import { ProjectsEntity } from '../../projects/entities/projects.entity';
export declare class UsersProjectsEntity extends BaseEntity {
    user: UsersEntity;
    project: ProjectsEntity;
}
