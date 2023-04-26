import { Entity } from 'typeorm';

import { _LegacyEntity } from './_legacy';

@Entity({
  name: 'tombstone',
  orderBy: {
    createdAt: 'DESC',
  },
})
export class TombstoneEntity extends _LegacyEntity {}
