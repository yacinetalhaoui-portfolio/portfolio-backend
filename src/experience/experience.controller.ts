import {Body, Controller, Get, Post} from '@nestjs/common';
import { ExperienceService } from './experience.service';
import { Experience } from './schemas/experience.schema';
import {ApiTags} from "@nestjs/swagger";
import {ExperienceDto} from "./dto/experience.dto";

@Controller('experience')
@ApiTags("ProfessionalExperience")
export class ExperienceController {
  constructor(private readonly experienceService: ExperienceService) {}

  @Get()
  findAll(): Promise<Experience[]> {
    return this.experienceService.findAll();
  }

  @Post()
  addProfessionalExperience(@Body() experienceDto: ExperienceDto) {
    return this.experienceService.createExperience(experienceDto);
  }
}
