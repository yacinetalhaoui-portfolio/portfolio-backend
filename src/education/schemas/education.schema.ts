import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: false })
export class Education {
  @Prop({ required: true })
  school: string;

  @Prop({ required: true })
  degree: string;

  @Prop({ required: true })
  begin_date: string;

  @Prop({ required: true })
  end_date: string;

  @Prop({ required: true })
  image_url: string;
}

export const EducationSchema = SchemaFactory.createForClass(Education);
