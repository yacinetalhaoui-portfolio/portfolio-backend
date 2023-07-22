import { Controller, Get } from '@nestjs/common';
import { ExperienceService } from './experience.service';
import { Experience } from './schemas/experience.schema';

@Controller('experience')
export class ExperienceController {
  constructor(private readonly experienceService: ExperienceService) {}

  @Get()
  findAll(): Promise<Experience[]> {
    return this.experienceService.findAll();
  }
}
