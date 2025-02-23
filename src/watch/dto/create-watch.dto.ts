import { ApiProperty } from '@nestjs/swagger';

export class CreateWatchDto {
  @ApiProperty()
  id?: number;
  @ApiProperty()
  oclock: string;
}
