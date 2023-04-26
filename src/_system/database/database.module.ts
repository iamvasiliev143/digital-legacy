import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('MYSQL.HOST'),
        port: configService.get<number>('MYSQL.PORT'),
        username: configService.get('MYSQL.USERNAME'),
        password: configService.get('MYSQL.PASSWORD'),
        database: configService.get('MYSQL.DATABASE'),
        timezone: 'Z',
        synchronize: true,
        logging: false,
        autoLoadEntities: true,
        entities: [],
      }),
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
