import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: false })
export class Project {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  language: string;
  @Prop({ required: true })
  context: string;
  @Prop()
  team_size: string;
  @Prop({ required: true })
  objective: string;
  @Prop({ required: true })
  description: string;
  @Prop({ required: true })
  tools: string[];
  @Prop({ required: true })
  image_url: string;
  @Prop({ required: true })
  github_link: string;
  @Prop()
  organization_description: string;
  @Prop()
  github_org_link: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
