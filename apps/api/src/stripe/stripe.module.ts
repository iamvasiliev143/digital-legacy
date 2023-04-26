import { Module } from '@nestjs/common';

import { ConfigModule } from '../_system/config/config.module';

import { StripeService } from './stripe.service';

@Module({
  providers: [StripeService],
  imports: [ConfigModule],
  exports: [StripeService],
})
export class StripeModule {}
