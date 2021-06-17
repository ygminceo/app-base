import { Column, Entity, PrimaryColumn } from 'typeorm';
import { BankAccountModel } from '@lib/common/billing/models';

@Entity()
export class BankAccount implements BankAccountModel {
  @PrimaryColumn()
  id!: string;
  @Column()
  name!: string;
  @Column()
  institution_id!: string;
  @Column()
  institution_name!: string;
  @Column()
  stripe_bank_access_token?: string;
  @Column()
  plaid_bank_access_token?: string;
}