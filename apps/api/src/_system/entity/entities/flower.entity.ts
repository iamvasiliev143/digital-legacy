import { Entity } from 'typeorm';

import { _LegacyEntity } from './_legacy';

@Entity({
  name: 'flower',
  orderBy: {
    createdAt: 'DESC',
  },
})
export class FlowerEntity extends _LegacyEntity {}
