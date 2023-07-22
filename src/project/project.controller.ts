import { Controller, Get } from '@nestjs/common';
import { ProjectService } from './project.service';
import { Project } from './schemas/project.schema';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  findAll(): Promise<Project[]> {
    return this.projectService.findAll();
  }
}
