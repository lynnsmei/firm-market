import { Module } from '@nestjs/common';
import { FirmService } from './firm.service';
import { FirmController } from './firm.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [FirmController],
  providers: [FirmService, PrismaService],
})
export class FirmModule {}