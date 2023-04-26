import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';

export const CONFIGS = () => ({
  MYSQL: {
    HOST: 'localhost',
    PORT: 3306,
    USERNAME: 'root',
    PASSWORD: 'root',
    DATABASE: 'digital-legacy',
  },

  STRIPE: {
    SECRET:
      'sk_test_51GqygoIFKksLN2RxR2h9DNVP6TtEnbDzogDpvsoMjWAafX8c3HhmhVG2apYsbhAivL2VMludMYGJQgNm4Ifljp9s00eBCTAbUF',
  },
});

@Module({
  imports: [
    NestConfigModule.forRoot({
      load: [CONFIGS],
    }),
  ],
  exports: [NestConfigModule],
})
export class ConfigModule {}
