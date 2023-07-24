import {Injectable, NotFoundException} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Education } from './schemas/education.schema';
import { Model } from 'mongoose';
import {EducationDto} from "./dtos/education.dto";

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

  async addEducationExperience(educationDto: EducationDto) {
    const educationExistingCheck = await this.educationModel.findOne({ degree: educationDto.degree, school: educationDto.school });

    console.log(educationExistingCheck)

    if (educationExistingCheck) {
      throw new NotFoundException("Cette formation existe déjà");
    }

    const newEducationExperience = new this.educationModel(educationDto);

    return newEducationExperience.save();
  }
}
