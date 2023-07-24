import {ApiProperty} from "@nestjs/swagger";

export class ProjectDto {
    @ApiProperty()
    name: string;
    @ApiProperty()
    language: string;
    @ApiProperty()
    context: string;
    @ApiProperty()
    team_size: string;
    @ApiProperty()
    objective: string;
    @ApiProperty()
    organization_description: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    link: string;
    @ApiProperty()
    github_link: string;
    @ApiProperty()
    github_org_link: string;
    @ApiProperty()
    tools: string[];
}