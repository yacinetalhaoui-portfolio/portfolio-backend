import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import { ExperienceService } from './experience.service';
import { Experience } from './schemas/experience.schema';
import {ApiTags, ApiExcludeEndpoint} from "@nestjs/swagger";
import {ExperienceDto} from "./dtos/experience.dto";
import {SecretCodeGuard} from "../guards/secret.guard";

@Controller('experience')
@ApiTags("ProfessionalExperience")
export class ExperienceController {
  constructor(private readonly experienceService: ExperienceService) {}

  @Get()
  findAll(): Promise<Experience[]> {
    return this.experienceService.findAll();
  }


  @Post()
  @ApiExcludeEndpoint()
  @UseGuards(SecretCodeGuard)
  addProfessionalExperience(@Body() experienceDto: ExperienceDto) {
    return this.experienceService.createExperience(experienceDto);
  }
}
