import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsOptional } from 'class-validator';

export class TasksUpdateStartDTO {
  @ApiProperty()
  @IsOptional()
  @IsDate()
  start_date?: Date;

  // @ApiProperty()
  // @IsOptional()
  // @IsDate()
  // completion_date?: Date;
  // @ApiProperty()
  // @IsNotEmpty()
  // @IsString()
  // responsableName: string;
  // @ApiProperty()
  // @IsOptional()
  // project?: ProjectDTO;
}
