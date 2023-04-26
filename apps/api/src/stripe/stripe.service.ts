import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import Stripe from 'stripe';

@Injectable()
export class StripeService {
  private stripe!: Stripe;

  constructor(protected readonly configService: ConfigService) {
    this.stripe = new Stripe(this.configService.get('STRIPE.SECRET'), {
      apiVersion: '2022-11-15',
    });
  }

  async createProduct() {
    const product = await this.stripe.products.create({
      name: '#1',
      description: 'The #1 product',
    });

    const price = await this.stripe.prices.create({
      unit_amount: 999,
      currency: 'usd',
      product: product.id,
    });
  }

  async createCustomer() {
    const customer = await this.stripe.customers.create({
      email: 'mikhail@kenmoredesign.com',
    });
  }

  async createPayment() {}
}
