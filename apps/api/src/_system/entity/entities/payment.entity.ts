import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { UserEntity } from './user.entity';

@Entity({
  name: 'payment',
  orderBy: {
    createdAt: 'DESC',
  },
})
export class PaymentEntity {
  @PrimaryGeneratedColumn()
  public readonly id!: string;

  @Column()
  public stripeProductId: string;

  @ManyToOne(() => UserEntity, (entity) => entity.id)
  public readonly user!: UserEntity;

  @CreateDateColumn()
  public readonly createdAt!: Date;

  @UpdateDateColumn()
  public readonly updatedAt!: Date;

  @DeleteDateColumn()
  public readonly deletedAt!: Date;
}
