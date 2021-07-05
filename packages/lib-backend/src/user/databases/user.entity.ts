import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { BankModel, CardModel } from '@lib/common/billing/models';
import { LinkedUserModel, UserModel } from '@lib/common/user/models';

@Entity()
export class User implements UserModel {
  @ObjectIdColumn()
  _id!: string;
  @Column({ unique: true })
  email!: string;
  // TODO: phone number should be unique too
  @Column()
  phoneNumber?: string;
  @Column()
  banks?: BankModel[];
  @Column()
  cards?: CardModel[];
  @Column()
  linkedAccounts?: {
    [name: string]: LinkedUserModel;
  };
}
