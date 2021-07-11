import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { SubscriptionModel } from '@lib/common/landing/models';

@Entity()
export class Subscription implements SubscriptionModel {
  @ObjectIdColumn()
  _id!: string;
  @Column()
  email!: string;
}
