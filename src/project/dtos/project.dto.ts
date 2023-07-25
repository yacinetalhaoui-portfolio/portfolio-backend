import {ApiProperty} from "@nestjs/swagger";

export class ProjectDto {
    @ApiProperty()
    name: string;
    @ApiProperty({ required: false })
    language?: string;
    @ApiProperty()
    context: string;
    @ApiProperty()
    team_size: string;
    @ApiProperty()
    objective: string;
    @ApiProperty({ required: false })
    organization_description?: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    link: string;
    @ApiProperty()
    github_link: string;
    @ApiProperty({ required: false })
    github_org_link?: string;
    @ApiProperty()
    tools: string[];
    @ApiProperty()
    secretCode: string;
}