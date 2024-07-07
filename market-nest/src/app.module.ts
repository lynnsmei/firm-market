import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { FirmModule } from './firm/firm.module';

@Module({
  imports: [PrismaModule, FirmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
