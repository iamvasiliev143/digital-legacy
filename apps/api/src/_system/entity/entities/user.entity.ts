import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { PaymentEntity } from './payment.entity';

import { LegacyEntity } from './legacy.entity';
import { FenceEntity } from './fence.entity';
import { FlowerEntity } from './flower.entity';
import { TombstoneEntity } from './tombstone.entity';

@Entity({
  name: 'user',
  orderBy: {
    createdAt: 'DESC',
  },
})
export class UserEntity {
  @PrimaryGeneratedColumn()
  public readonly id!: string;

  @Column()
  @Index()
  public firstName!: string;

  @Column()
  @Index()
  public lastName!: string;

  public get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  @Column()
  @Index()
  public facebook!: string;

  @Column()
  @Index()
  public twitter!: string;

  @Column()
  @Index()
  public instagram!: string;

  @Column()
  @Index()
  public snapchat!: string;

  @Column()
  @Index()
  public email!: string;

  @Column({ nullable: true, default: null })
  public password!: string;

  @Column()
  public stripeCustomerId: string;

  @OneToMany(() => PaymentEntity, (entity) => entity.user)
  public readonly payments!: PaymentEntity[];

  @OneToMany(() => LegacyEntity, (entity) => entity.user)
  public readonly legacies!: LegacyEntity[];

  @ManyToMany(() => FenceEntity)
  @JoinTable({
    name: 'user_fence',
    joinColumn: { name: 'userId' },
    inverseJoinColumn: { name: 'fenceId' },
  })
  public fences!: FenceEntity[];

  @ManyToMany(() => FenceEntity)
  @JoinTable({
    name: 'user_flower',
    joinColumn: { name: 'userId' },
    inverseJoinColumn: { name: 'flowerId' },
  })
  public flowers!: FlowerEntity[];

  @ManyToMany(() => TombstoneEntity)
  @JoinTable({
    name: 'user_tombstone',
    joinColumn: { name: 'userId' },
    inverseJoinColumn: { name: 'tombstoneId' },
  })
  public tombstones!: TombstoneEntity[];

  @CreateDateColumn()
  public readonly createdAt!: Date;

  @UpdateDateColumn()
  public readonly updatedAt!: Date;

  @DeleteDateColumn()
  public readonly deletedAt!: Date;
}
