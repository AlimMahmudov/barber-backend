import { ApiProperty } from '@nestjs/swagger';

export class CreateSendDto {
  @ApiProperty()
  id?: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  master: string;
  @ApiProperty()
  service: string;
  @ApiProperty()
  time: string;
  @ApiProperty()
  day: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  phone: string;
}
