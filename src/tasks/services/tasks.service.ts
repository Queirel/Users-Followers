import { Injectable, Logger, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cron, CronExpression, Interval } from '@nestjs/schedule';
import { Repository } from 'typeorm';
// import { ErrorManager } from 'src/utils/error.manager';
import { TasksCreateDTO } from '../dto/tasks-create.dto';
import { TasksEntity } from '../entities/tasks.entity';
import { ProjectsService } from '../../projects/services/projects.service';
import { AppDS } from '../../config/data.source';
import { email } from '../../utils/email';
import { TasksUpdateStartDTO } from '../dto/tasks-update-start-dto';
import { TasksUpdateFinishDTO } from '../dto/tasks-update-finish-dto';
email;

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksEntity)
    private readonly taskRepository: Repository<TasksEntity>,
    private readonly projectService: ProjectsService,
  ) {}

  private readonly logger = new Logger(TasksService.name);

  // random = (min, max) => {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // };

  // Create tasks
  // @Interval(140000)
  // public async taskSeed() {
  //   this.logger.debug('Tasks restarted');
  //   await AppDS.initialize();
  //   const queryRunner = AppDS.createQueryRunner();
  //   await queryRunner.query('TRUNCATE TABLE "task" CASCADE');
  //   await AppDS.destroy();

  //   const time = (ms) => {
  //     const now = Date.now() + ms;
  //     const time = new Date(now);
  //     return time;
  //   };

  //   await this.taskRepository.save([
  //     {
  //       task_name: 'Task 1',
  //       must_start_date: time(20000),
  //       must_completion_date: time(40000),
  //     },
  //     {
  //       task_name: 'Task 2',
  //       must_start_date: time(60000),
  //       must_completion_date: time(80000),
  //     },
  //     {
  //       task_name: 'Task 3',
  //       must_start_date: time(100000),
  //       must_completion_date: time(120000),
  //     },
  //   ]);
  //   let i;
  //   const results = [];
  //   const tasks = await this.taskRepository.find();
  //   for (i = 0; i < tasks.length; i++) {
  //     results.push({
  //       Name: tasks[i].task_name,
  //       'Must start date': tasks[i].must_start_date.toUTCString(),
  //       'Must completion date': tasks[i].must_completion_date.toUTCString(),
  //       Progress: tasks[i].progress,
  //       Status: tasks[i].status,
  //     });
  //   }
  //   const times = new Date(Date.now()).toUTCString();

  //   return { 'Date now': times, Tasks: results.sort };
  // }

  //First task

  // @Interval(+(Math.floor(Math.random() * (30000 - 10000 + 1)) + 10000))
  // async first_task_start() {
  //   const tasks = await this.taskRepository.find();
  //   if (!tasks[0].start_date) {
  //     await this.taskRepository.update(tasks[0].id, {
  //       start_date: new Date(Date.now()),
  //       progress: 'IN_PROGRESS',
  //     });
  //   }
  // }

  // @Interval(+(Math.floor(Math.random() * (50000 - 30000 + 1)) + 30000))
  // async first_task_finish() {
  //   const tasks = await this.taskRepository.find();
  //   if (tasks[0].start_date) {
  //     if (!tasks[0].completion_date) {
  //       await this.taskRepository.update(tasks[0].id, {
  //         completion_date: new Date(Date.now()),
  //         progress: 'FINISH',
  //       });
  //     }
  //   }
  // }

  //Second task
  // @Interval(+(Math.floor(Math.random() * (70000 - 50000 + 1)) + 50000))
  // async second_task_start() {
  //   const tasks = await this.taskRepository.find();
  //   if (!tasks[1].start_date) {
  //     await this.taskRepository.update(tasks[1].id, {
  //       start_date: new Date(Date.now()),
  //       progress: 'IN_PROGRESS',
  //     });
  //   }
  // }

  // @Interval(+(Math.floor(Math.random() * (90000 - 70000 + 1)) + 70000))
  // async second_task_finish() {
  //   const tasks = await this.taskRepository.find();
  //   if (tasks[1].start_date) {
  //     if (!tasks[1].completion_date) {
  //       await this.taskRepository.update(tasks[1].id, {
  //         completion_date: new Date(Date.now()),
  //         progress: 'FINISH',
  //       });
  //     }
  //   }
  // }
  //Thirth task
  // @Interval(+(Math.floor(Math.random() * (110000 - 90000 + 1)) + 90000))
  // async thirth_task_start() {
  //   const tasks = await this.taskRepository.find();
  //   if (!tasks[2].start_date) {
  //     await this.taskRepository.update(tasks[2].id, {
  //       start_date: new Date(Date.now()),
  //       progress: 'IN_PROGRESS',
  //     });
  //   }
  // }
  // @Interval(+(Math.floor(Math.random() * (130000 - 110000 + 1)) + 110000))
  // async thirth_task_finish() {
  //   const tasks = await this.taskRepository.find();

  //   if (tasks[2].start_date) {
  //     if (!tasks[2].completion_date) {
  //       await this.taskRepository.update(tasks[2].id, {
  //         completion_date: new Date(Date.now()),
  //         progress: 'FINISH',
  //       });
  //     }
  //   }
  // }

  public async createTask(
    body: TasksCreateDTO,
    // projectId: string,
  ): Promise<TasksEntity> {
    // try {
    // const project = await this.projectService.findProjectById(projectId);
    // if (project === undefined) {
    // throw new ErrorManager({
    //   type: 'NOT_FOUND',
    //   message: 'No se ha encontrado el proyecto',
    // });
    // }
    console.log(body);
    const task = this.taskRepository.create(body);
    console.log(task);

    return await this.taskRepository.save(task);
    // } catch (error) {
    //   throw ErrorManager.createSignatureError(error.message);
    // }
  }

  public async start_Task(
    body: TasksUpdateStartDTO,
    id: string,
    // projectId: string,
  ): Promise<TasksEntity> {
    const task = await this.taskRepository.findOne({ where: { id } });
    await this.taskRepository.update(task.id, {
      start_date: body.start_date,
      progress: 'IN_PROGRESS',
    });
    //         completion_date: new Date(Date.now()),
    //         progress: 'FINISH',
    return await this.taskRepository.findOne({ where: { id } });
  }

  public async completion_Task(
    body: TasksUpdateFinishDTO,
    id: string,
    // projectId: string,
  ): Promise<TasksEntity> {
    const task = await this.taskRepository.findOne({ where: { id } });
    await this.taskRepository.update(task.id, {
      completion_date: body.completion_date,
      progress: 'FINISH',
    });
    //         completion_date: new Date(Date.now()),
    //         progress: 'FINISH',
    return await this.taskRepository.findOne({ where: { id } });
  }

  public async deleteAll() {
    await AppDS.initialize();
    const queryRunner = AppDS.createQueryRunner();
    await queryRunner.query('TRUNCATE TABLE "task" CASCADE');
    await AppDS.destroy();
    return 'All tasks deleted'
  }

  public async tasksAll() {
    let i;
    const results = [];
    const tasks = await this.taskRepository.find();
    for (i = 0; i < tasks.length; i++) {
      let must_start = null;
      let must_comp = null;
      if (tasks[i].start_date) {
        must_start = tasks[i].start_date.toUTCString();
      }
      if (tasks[i].completion_date) {
        must_comp = tasks[i].completion_date.toUTCString();
      }

      results.push({
        Id: tasks[i].id,
        Name: tasks[i].task_name,
        'Must start date': tasks[i].must_start_date.toUTCString(),
        'Start date': must_start,
        'Must completion date': tasks[i].must_completion_date.toUTCString(),
        'Completion date': must_comp,
        Progress: tasks[i].progress,
        Status: tasks[i].status,
      });
    }
    const time = new Date(Date.now()).toUTCString();

    return {
      'Date now': time,
      Tasks: results.sort(function (a, b) {
        return a.task_name - b.task_name;
      }),
    };
  }

  //Checking time
  @Cron(CronExpression.EVERY_MINUTE)
  public async checkStatus() {
    // this.logger.debug('Checking');
    let i;
    const tasks = await this.taskRepository.find();
    for (i = 0; i < tasks.length; i++) {
      if (!tasks[i].start_date) {
        const compare_start = tasks[i].must_start_date.getTime() - Date.now();
        if (compare_start < 0) {
          if (tasks[i].mail_start_send == false) {
            await this.taskRepository.update(tasks[i].id, {
              status: 'LATE',
              mail_start_send: true,
            });
            await email(
              tasks[i].email,
              'Late task start notice',
              `The start of your task "${tasks[i].task_name}" is late`,
            );
          }
        }
      }
      if (!tasks[i].completion_date) {
        const compare_completion =
          tasks[i].must_completion_date.getTime() - Date.now();
        if (compare_completion < 0) {
          if (tasks[i].mail_completion_send == false) {
            await this.taskRepository.update(tasks[i].id, {
              status: 'LATE',
              mail_completion_send: true,
            });
            await email(
              tasks[i].email,
              'Late task completion notice',
              `The completion of your task "${tasks[i].task_name}" is late`,
            );
          }
        }
      }
      if (tasks[i].completion_date) {
        if (
          tasks[i].completion_date.getTime() <
          tasks[i].must_completion_date.getTime()
        ) {
          await this.taskRepository.update(tasks[i].id, { status: 'ONTIME' });
        }
      }
    }
  }
  // tasks[i].start_date = new Date(Date.now());
  // @Cron(CronExpression.EVERY_10_SECONDS)
  // handleCron() {
  //   this.logger.debug('called');
  // }

  //   @Interval(10000)
  //   handleInterval() {
  //     this.logger.debug('Called every 10 seconds');
  //   }
}
