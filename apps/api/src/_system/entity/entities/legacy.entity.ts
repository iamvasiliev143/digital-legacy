import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { UserEntity } from './user.entity';

import { FenceEntity } from './fence.entity';
import { FlowerEntity } from './flower.entity';
import { TombstoneEntity } from './tombstone.entity';

@Entity({
  name: 'legacy',
  orderBy: {
    createdAt: 'DESC',
  },
})
export class LegacyEntity {
  @PrimaryGeneratedColumn()
  public readonly id!: string;

  @Column()
  public reason!: string;

  @Column({
    type: 'date',
  })
  @Index()
  public birthday!: Date;

  @Column({
    type: 'date',
  })
  @Index()
  public deathday!: Date;

  @Column({
    type: 'simple-array',
  })
  public readonly tombstonePosition!: number[];

  @ManyToOne(() => UserEntity, (entity) => entity.id)
  public readonly user!: UserEntity;

  @ManyToOne(() => FenceEntity, (entity) => entity.id)
  public readonly fence!: FenceEntity;

  @ManyToOne(() => FlowerEntity, (entity) => entity.id)
  public readonly flower!: FlowerEntity;

  @ManyToOne(() => TombstoneEntity, (entity) => entity.id)
  public readonly tombstone!: TombstoneEntity;

  @CreateDateColumn()
  public readonly createdAt!: Date;

  @UpdateDateColumn()
  public readonly updatedAt!: Date;

  @DeleteDateColumn()
  public readonly deletedAt!: Date;
}
