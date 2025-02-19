import { ApiProperty } from '@nestjs/swagger';

export class CreateShaveDto {
  @ApiProperty()
  id?: number;
  @ApiProperty()
  title: string;
  @ApiProperty()
  image: string;
  @ApiProperty()
  price: string;
}
