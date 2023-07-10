import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { TasksCreateDTO } from '../dto/tasks-create.dto';
import { TasksService } from '../services/tasks.service';
import { TasksUpdateFinishDTO } from '../dto/tasks-update-finish-dto';
import { TasksUpdateStartDTO } from '../dto/tasks-update-start-dto';

// @ApiTags('Tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}



  // @Get('seed')
  // public async taskSeed() {
  //   return await this.tasksService.taskSeed();
  // }

  @ApiTags('Tasks')
  @Get('all')
  public async tasksAll() {
    return await this.tasksService.tasksAll();
  }

  @ApiTags('Tasks')
  @Delete('delete')
  public async deleteAll() {
    return await this.tasksService.deleteAll();
  }

  @ApiTags('Tasks')
  @ApiParam({
    name: 'id',
  })
  @Put('start/:id')
  public async start_Task(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: TasksUpdateStartDTO,
  ) {
    return await this.tasksService.start_Task(body, id);
  }

  @ApiTags('Tasks')
  @ApiParam({
    name: 'id',
  })
  @Put('finish/:id')
  public async completion_Task(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: TasksUpdateFinishDTO,
  ) {
    return await this.tasksService.completion_Task(body, id);
  }
  

  // @ApiParam({
  //   name: 'projectId',
  // })
  @ApiTags('Tasks')
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
