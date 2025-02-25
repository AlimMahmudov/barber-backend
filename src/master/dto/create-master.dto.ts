import { ApiProperty } from '@nestjs/swagger';

export class CreateMasterDto {
  @ApiProperty()
  id?: number;
  @ApiProperty()
  human: string;
  @ApiProperty()
  photo: string;
  @ApiProperty()
  work: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  skills: string;
  @ApiProperty()
  rating: string;
}
