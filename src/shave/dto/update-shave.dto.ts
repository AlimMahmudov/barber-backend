import { PartialType } from '@nestjs/swagger';
import { CreateShaveDto } from './create-shave.dto';

export class UpdateShaveDto extends PartialType(CreateShaveDto) {
  id?: number;
  title: string;
  image: string;
  price: string;
}
