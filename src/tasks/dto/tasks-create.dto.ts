import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { PROGRESS, STATUS_TASK } from 'src/constants/status-task';
import { ProjectDTO } from 'src/projects/dto/projects.dto';

export class TasksCreateDTO {

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  task_name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  must_start_date: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  must_completion_date: Date;

  // @ApiProperty()
  // @IsNotEmpty()
  // @IsString()
  // taskDescription: string;

  // @ApiProperty()
  // @IsNotEmpty()
  // @IsEnum(STATUS_TASK)
  // status: STATUS_TASK;

  // @ApiProperty()
  // @IsNotEmpty()
  // @IsEnum(PROGRESS)
  // progress: PROGRESS;

  // @ApiProperty()
  // @IsNotEmpty()
  // @IsString()
  // responsableName: string;

  // @ApiProperty()
  // @IsOptional()
  // project?: ProjectDTO;
}
