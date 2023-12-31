import { UsersProjectsEntity } from 'src/users/entities/usersProjects.entity';
import { UsersService } from 'src/users/services/users.service';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ProjectDTO, ProjectUpdateDTO } from '../dto/projects.dto';
import { ProjectsEntity } from '../entities/projects.entity';
export declare class ProjectsService {
    private readonly projectRepository;
    private readonly userProjectRepository;
    private readonly usersService;
    constructor(projectRepository: Repository<ProjectsEntity>, userProjectRepository: Repository<UsersProjectsEntity>, usersService: UsersService);
    createProject(body: ProjectDTO, userId: string): Promise<any>;
    findProjects(): Promise<ProjectsEntity[]>;
    findProjectById(id: string): Promise<ProjectsEntity>;
    updateProject(body: ProjectUpdateDTO, id: string): Promise<UpdateResult | undefined>;
    deleteProject(id: string): Promise<DeleteResult | undefined>;
}
