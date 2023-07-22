import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Education } from './schemas/education.schema';
import { Model } from 'mongoose';

@Injectable()
export class EducationService {
  constructor(
    @InjectModel(Education.name)
    private educationModel: Model<Education>,
  ) {}

  async findAll(): Promise<Education[]> {
    const educations = await this.educationModel.find().exec();
    return educations;
  }
}
