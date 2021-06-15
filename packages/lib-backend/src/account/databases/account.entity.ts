import { BankAccount } from '@lib/backend/payment/database/bankAccount.entity';
import { AccountModel } from '@lib/common/account/models';
import { IntegrationModel } from '@lib/common/integration/models';
import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Account implements AccountModel {
  @ObjectIdColumn()
  _id!: string;
  @Column({ unique: true })
  emailAddress!: string;
  @Column()
  phoneNumber?: string;
  @Column(() => BankAccount)
  bankAccounts?: BankAccount[];
  @Column()
  integration?: IntegrationModel;
}
