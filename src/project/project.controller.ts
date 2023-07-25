import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import { ProjectService } from './project.service';
import { Project } from './schemas/project.schema';
import { ProjectDto } from "./dtos/project.dto";
import {ApiExcludeEndpoint, ApiTags} from "@nestjs/swagger";
import {SecretCodeGuard} from "../guards/secret.guard";

@Controller('project')
@ApiTags('Project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  findAll(): Promise<Project[]> {
    return this.projectService.findAll();
  }

  @Post()
  @ApiExcludeEndpoint()
  @UseGuards(SecretCodeGuard)
  createProject(@Body() projectDto: ProjectDto): Promise<Project> {
    return this.projectService.create(projectDto);
  }
}
