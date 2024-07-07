import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FirmService {
  constructor(private prisma: PrismaService) {}

  async getUsers() {
    return this.prisma.firm.findMany();
  }
}