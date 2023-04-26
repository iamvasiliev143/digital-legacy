import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserEntity } from './entities/user.entity';
import { PaymentEntity } from './entities/payment.entity';

import { LegacyEntity } from './entities/legacy.entity';
import { FenceEntity } from './entities/fence.entity';
import { FlowerEntity } from './entities/flower.entity';
import { TombstoneEntity } from './entities/tombstone.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      PaymentEntity,

      LegacyEntity,
      FenceEntity,
      FlowerEntity,
      TombstoneEntity,
    ]),
  ],
  exports: [TypeOrmModule],
})
export class EntityModule {}
