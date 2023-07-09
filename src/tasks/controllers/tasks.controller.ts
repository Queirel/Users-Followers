import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { TasksCreateDTO } from '../dto/tasks-create.dto';
import { TasksService } from '../services/tasks.service';

// @ApiTags('Tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}


  @ApiTags('Tasks')
  @Get('seed')
  public async taskSeed() {
    return await this.tasksService.taskSeed();
  }

  @ApiTags('Tasks')
  @Get('all')
  public async tasksAll() {
    return await this.tasksService.tasksAll();
  }

  // @ApiParam({
  //   name: 'projectId',
  // })
  @Post('create')
  public async createTask(
    @Body() body: TasksCreateDTO,
    // @Param('projectId') projectId: string,
  ) {
    return this.tasksService.createTask(body,
      //  projectId
       );
  }
}
