import { PROGRESS, STATUS_TASK } from '../../constants/status-task';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { email } from '../../utils/email';

@Entity({ name: 'task' })
export class TasksEntity {
  // @Exclude()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  task_name: string;

  // @Column()
  // task_description: string;

  @Column({ default: 'ONTIME' })
  status: string;

  // @Column({ default: 'ONTIME' })
  // status: STATUS_TASK;

  // @Column({ default: 'CREATED' })
  // progress: PROGRESS;

  @Column()
  email: string;

  @Column({ default: 'CREATED' })
  progress: string;

  @Column()
  must_start_date: Date;

  @Column({ nullable: true })
  start_date: Date;

  @Column()
  must_completion_date: Date;

  @Column({ nullable: true })
  completion_date: Date;

  @Exclude()
  @Column({ nullable: true, default: false })
  mail_start_send: boolean;

  @Exclude()
  @Column({ nullable: true, default: false })
  mail_completion_send: boolean;

  // @Column()
  // responsableName: string;

  // @ManyToOne(() => ProjectsEntity, (project) => project.tasks)
  // @JoinColumn({
  //   name: 'project_id',
  // })
  // project: ProjectsEntity;
}
