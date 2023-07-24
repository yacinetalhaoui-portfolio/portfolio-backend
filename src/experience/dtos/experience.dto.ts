import {ApiProperty} from "@nestjs/swagger";

export class ExperienceDto {
    @ApiProperty()
    title: string;
    @ApiProperty()
    company: string;
    @ApiProperty()
    date: string;
    @ApiProperty()
    city: string;
    @ApiProperty()
    responsabilities: string;
    @ApiProperty()
    image_url: string;
}