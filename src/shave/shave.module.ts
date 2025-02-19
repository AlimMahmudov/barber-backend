import { Module } from '@nestjs/common';
import { ShaveService } from './shave.service';
import { ShaveController } from './shave.controller';

@Module({
  controllers: [ShaveController],
  providers: [ShaveService],
})
export class ShaveModule {}
