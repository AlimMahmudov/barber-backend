import { PartialType } from '@nestjs/swagger';
import { CreateWatchDto } from './create-watch.dto';

export class UpdateWatchDto extends PartialType(CreateWatchDto) {
  id?: number;
  oclock: string;
}
