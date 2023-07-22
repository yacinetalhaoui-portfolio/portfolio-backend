import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: false })
export class Experience {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  company: string;

  @Prop({ required: true })
  date: string;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  responsabilities: string;
}

export const ExperienceSchema = SchemaFactory.createForClass(Experience);
