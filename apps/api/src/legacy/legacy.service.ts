import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { LegacyEntity } from '../_system/entity/entities/legacy.entity';

@Injectable()
export class LegacyService {
  constructor(
    @InjectRepository(LegacyEntity)
    protected readonly legacyRepo: Repository<LegacyEntity>,
  ) {}

  async getLegacies() {
    return await this.legacyRepo.find({
      skip: 50,
      take: 50,
    });
  }
}
