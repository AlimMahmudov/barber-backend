import { Module } from '@nestjs/common';
import { ServiceModule } from './service/service.module';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [ServiceModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
