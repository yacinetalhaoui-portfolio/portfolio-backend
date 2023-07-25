import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import { EducationService } from './education.service';
import { Education } from './schemas/education.schema';
import {EducationDto} from "./dtos/education.dto";
import {ApiTags, ApiExcludeEndpoint} from "@nestjs/swagger";
import {SecretCodeGuard} from "../guards/secret.guard";

@Controller('education')
@ApiTags("EducationExperience")
export class EducationController {
  constructor(private readonly educationService: EducationService) {}

  @Get()
  findAll(): Promise<Education[]> {
    return this.educationService.findAll();
  }

  @Post()
  @ApiExcludeEndpoint()
  @UseGuards(SecretCodeGuard)
  addEducationExperience(@Body() educationDto: EducationDto) {
    return this.educationService.addEducationExperience(educationDto);
  }
}
