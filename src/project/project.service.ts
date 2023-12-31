import {Injectable, NotFoundException} from '@nestjs/common';
import { Project } from './schemas/project.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ProjectDto } from "./dtos/project.dto";

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
    let result = null;
    const projectExistingCheck = await this.projectModel.findOne( { name: projectDto.name, github_link: projectDto.github_link} ).exec()
        .then(res => result = res);

    if (result) {
      throw new NotFoundException('Un projet avec le même nom existe déjà');
    }

    const newProject = new this.projectModel(projectDto);

    return newProject.save();
  }
}
