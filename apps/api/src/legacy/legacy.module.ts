import { Module } from '@nestjs/common';

import { ConfigModule } from '../_system/config/config.module';
import { DatabaseModule } from '../_system/database/database.module';
import { EntityModule } from '../_system/entity/entity.module';

import { LegacyController } from './legacy.controller';
import { LegacyService } from './legacy.service';

@Module({
  controllers: [LegacyController],
  providers: [LegacyService],
  imports: [ConfigModule, DatabaseModule, EntityModule],
  exports: [LegacyService],
})
export class LegacyModule {}
