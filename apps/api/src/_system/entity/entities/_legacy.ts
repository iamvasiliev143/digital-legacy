import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { LegacyEntity } from './legacy.entity';

export class _LegacyEntity {
  @PrimaryGeneratedColumn()
  public readonly id!: string;

  @Column()
  public stripeProductId: string;

  @OneToMany(() => LegacyEntity, (entity) => entity.user)
  public readonly legacies!: LegacyEntity[];

  @CreateDateColumn()
  public readonly createdAt!: Date;

  @UpdateDateColumn()
  public readonly updatedAt!: Date;

  @DeleteDateColumn()
  public readonly deletedAt!: Date;
}
