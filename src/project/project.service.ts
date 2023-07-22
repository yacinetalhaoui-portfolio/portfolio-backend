import { Injectable } from '@nestjs/common';
import { Project } from './schemas/project.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

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
}
