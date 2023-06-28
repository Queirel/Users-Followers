import { STATUS_TASK } from '../../constants/status-task';
import { ProjectsEntity } from '../../projects/entities/projects.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';

@Entity({ name: 'task' })
export class TasksEntity extends BaseEntity {
  @Column()
  task_name: string;

  @Column()
  task_description: string;

  @Column()
  status: STATUS_TASK;

  @Column()
  must_start_date: Date;

  @Column()
  start_date: Date;

  @Column()
  must_completion_date: Date;

  @Column()
  completion_date: Date;

  // @Column()
  // responsableName: string;

  @ManyToOne(() => ProjectsEntity, (project) => project.tasks)
  @JoinColumn({
    name: 'project_id',
  })
  project: ProjectsEntity;
}
