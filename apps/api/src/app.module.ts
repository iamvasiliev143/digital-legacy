import { Module } from '@nestjs/common';

import { ConfigModule } from './_system/config/config.module';
import { DatabaseModule } from './_system/database/database.module';
import { EntityModule } from './_system/entity/entity.module';

import { LegacyModule } from './legacy/legacy.module';
import { StripeModule } from './stripe/stripe.module';

@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    EntityModule,
    LegacyModule,
    StripeModule,
  ],
})
export class AppModule {}
