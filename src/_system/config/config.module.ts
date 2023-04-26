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
