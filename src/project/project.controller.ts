import {Body, Controller, Get, Post} from '@nestjs/common';
import { ProjectService } from './project.service';
import { Project } from './schemas/project.schema';
import { ProjectDto } from "./dto/project.dto";
import {ApiTags} from "@nestjs/swagger";

@Controller('project')
@ApiTags('Project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  findAll(): Promise<Project[]> {
    return this.projectService.findAll();
  }

  @Post()
  createProject(@Body() projectDto: ProjectDto): Promise<Project> {
    return this.projectService.create(projectDto);
  }
}
