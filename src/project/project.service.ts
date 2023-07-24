import {Injectable, NotFoundException} from '@nestjs/common';
import { Project } from './schemas/project.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ProjectDto } from "./dto/project.dto";

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project.name)
    private projectModel: Model<Project>,
  ) {}

  async findAll(): Promise<Project[]> {
    const projects = await this.projectModel.find().exec();

    return projects;
  }

  async create(projectDto: ProjectDto): Promise<Project> {
    const projectExistingCheck = this.projectModel.findOne( { name: projectDto.name, github_link: projectDto.github_link} ).exec();

    if (projectExistingCheck) {
      throw new NotFoundException('Un projet avec le même nom existe déjà');
    }

    const newProject = new this.projectModel(projectDto);

    return newProject.save();
  }
}
