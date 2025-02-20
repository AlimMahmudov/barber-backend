import { PartialType } from '@nestjs/mapped-types';
import { CreateServiceDto } from './create-service.dto';

export class UpdateServiceDto extends PartialType(CreateServiceDto) {
  id?: number;
  title: string;
  type: string;
  time: string;
  price: string;
}
