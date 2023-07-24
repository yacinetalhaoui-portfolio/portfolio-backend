import {Body, Controller, Get, Post} from '@nestjs/common';
import { EducationService } from './education.service';
import { Education } from './schemas/education.schema';
import {EducationDto} from "./dtos/education.dto";
import {ApiTags} from "@nestjs/swagger";

@Controller('education')
@ApiTags("EducationExperience")
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
