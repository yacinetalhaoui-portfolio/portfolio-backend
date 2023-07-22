import { Controller, Get } from '@nestjs/common';
import { EducationService } from './education.service';
import { Education } from './schemas/education.schema';

@Controller('education')
export class EducationController {
  constructor(private readonly educationService: EducationService) {}

  @Get()
  findAll(): Promise<Education[]> {
    return this.educationService.findAll();
  }
}
