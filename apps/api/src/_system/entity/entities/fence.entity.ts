import { Entity } from 'typeorm';

import { _LegacyEntity } from './_legacy';

@Entity({
  name: 'fence',
  orderBy: {
    createdAt: 'DESC',
  },
})
export class FenceEntity extends _LegacyEntity {}
