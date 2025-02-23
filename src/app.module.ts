import { Module } from '@nestjs/common';
import { ServiceModule } from './service/service.module';
import { PrismaModule } from 'prisma/prisma.module';
import { VideoModule } from './video/video.module';
import { MasterModule } from './master/master.module';
import { ShaveModule } from './shave/shave.module';
import { WatchModule } from './watch/watch.module';

@Module({
  imports: [ServiceModule, PrismaModule, VideoModule, MasterModule, ShaveModule, WatchModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
