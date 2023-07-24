import {Injectable, NotFoundException} from '@nestjs/common';
import { Experience } from './schemas/experience.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {ExperienceDto} from "./dto/experience.dto";

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

  async createExperience(experienceDto: ExperienceDto): Promise<Experience> {
    const experienceExistingCheck = this.experienceModel.findOne( { title: experienceDto.title, company: experienceDto.company, date: experienceDto.date } );

    if (experienceExistingCheck) {
      throw new NotFoundException("Cette expérience existe déjà")
    }

    const newExperience = new this.experienceModel(experienceDto)

    return newExperience.save();
  }
}
