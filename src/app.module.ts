import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './project/project.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ExperienceModule } from './experience/experience.module';
import { EducationModule } from './education/education.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.DB_URI,
    ),
    ProjectModule,
    ExperienceModule,
    EducationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
