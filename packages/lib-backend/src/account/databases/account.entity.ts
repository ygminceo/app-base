import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { AccountModel } from '@lib/common/account/models';
import { BankAccountModel } from '@lib/common/billing/models';

@Entity()
export class Account implements AccountModel {
  @ObjectIdColumn()
  _id!: string;
  @Column({ unique: true })
  emailAddress!: string;
  // TODO: phone number should be unique too
  @Column()
  phoneNumber?: string;
  @Column()
  bankAccounts?: BankAccountModel[];
}
