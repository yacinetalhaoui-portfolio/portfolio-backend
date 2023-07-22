import { Injectable } from '@nestjs/common';
import { Experience } from './schemas/experience.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ExperienceService {
  constructor(
    @InjectModel(Experience.name)
    private experienceModel: Model<Experience>,
  ) {}

  async findAll(): Promise<Experience[]> {
    const experiences = await this.experienceModel.find().exec();
    return experiences;
  }
}
