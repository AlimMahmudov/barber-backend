import { ApiProperty } from '@nestjs/swagger';

export class CreateVideoDto {
  @ApiProperty()
  id?: number;
  @ApiProperty()
  youtube: string;
}
