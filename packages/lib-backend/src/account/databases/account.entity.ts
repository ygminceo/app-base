import { BankAccount } from '@lib/backend/payment/database/bankAccount.entity';
import { AccountClass } from '@lib/common/account/models';
import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Account implements AccountClass {
  @ObjectIdColumn()
  _id!: string;
  @Column({ unique: true })
  emailAddress!: string;
  @Column()
  phoneNumber?: string;
  @Column(() => BankAccount)
  bankAccounts?: BankAccount[];
}
