import { ApiProperty } from '@nestjs/swagger';

export class CreateServiceDto {
  @ApiProperty()
  id?: number;
  @ApiProperty()
  title: string;
  @ApiProperty()
  type: string;
  @ApiProperty()
  time: string;
  @ApiProperty()
  price: string;
}
