import { Controller, Get } from '@nestjs/common';
import { FirmService } from './firm.service';

@Controller('firms')
export class FirmController {
  constructor(private readonly firmService: FirmService) {}

  @Get()
  async getAllFirms() {
    const firms = await this.firmService.getUsers()
    return { firms: firms };
  }
}