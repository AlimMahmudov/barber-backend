import { PartialType } from '@nestjs/swagger';
import { CreateSendDto } from './create-send.dto';

export class UpdateSendDto extends PartialType(CreateSendDto) {
  id?: number;
  name: string;
  master: string;
  service: string;
  time: string;
  day: string;
  email: string;
  phone: string;
}
