import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { BankModel } from '@lib/common/billing/models';
import { UserModel, LinkedUserModel } from '@lib/common/user/models';

@Entity()
export class User implements UserModel {
  @ObjectIdColumn()
  _id!: string;
  @Column({ unique: true })
  emailAddress!: string;
  // TODO: phone number should be unique too
  @Column()
  phoneNumber?: string;
  @Column()
  banks?: BankModel[];
  @Column()
  linkedAccounts?: {
    [name: string]: LinkedUserModel;
  };
}
