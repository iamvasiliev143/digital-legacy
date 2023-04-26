import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { LegacyService } from './legacy.service';

@Controller('legacies')
@ApiTags('Legacy')
export class LegacyController {
  constructor(protected readonly legacyService: LegacyService) {}

  @Get('/')
  @ApiOperation({ summary: '' })
  async getLegacies() {
    return await this.legacyService.getLegacies();
  }
}
