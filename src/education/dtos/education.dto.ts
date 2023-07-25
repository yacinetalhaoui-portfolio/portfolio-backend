import {ApiProperty} from "@nestjs/swagger";

export class EducationDto {
    @ApiProperty()
    degree: string;
    @ApiProperty()
    image_url: string;
    @ApiProperty()
    school: string;
    @ApiProperty()
    year: string;
    @ApiProperty()
    secretCode: string;
}