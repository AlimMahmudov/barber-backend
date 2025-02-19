import { Module } from '@nestjs/common';
import { ServiceModule } from './service/service.module';
import { PrismaModule } from 'prisma/prisma.module';
import { VideoModule } from './video/video.module';
import { MasterModule } from './master/master.module';

@Module({
  imports: [ServiceModule, PrismaModule, VideoModule, MasterModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
