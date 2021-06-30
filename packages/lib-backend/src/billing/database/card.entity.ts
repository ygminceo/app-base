import { Column, Entity, PrimaryColumn } from 'typeorm';
import { CardModel } from '@lib/common/billing/models';

@Entity()
export class Card implements CardModel {
  @PrimaryColumn()
  id!: string;
  @Column()
  brand!: string;
  @Column()
  exp_month!: number;
  @Column()
  exp_year!: number;
  @Column()
  last4!: string;
}
