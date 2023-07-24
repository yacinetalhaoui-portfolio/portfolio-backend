import {Body, Controller, Get, Post} from '@nestjs/common';
import { EducationService } from './education.service';
import { Education } from './schemas/education.schema';
import {EducationDto} from "./dtos/education.dto";

@Controller('education')
export class EducationController {
  constructor(private readonly educationService: EducationService) {}

  @Get()
  findAll(): Promise<Education[]> {
    return this.educationService.findAll();
  }

  @Post()
  addEducationExperience(@Body() educationDto: EducationDto) {
    return this.educationService.addEducationExperience(educationDto);
  }
}
