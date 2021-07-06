import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { ContactModel } from '@lib/common/app/models';

@Entity()
export class Contact implements ContactModel {
  @ObjectIdColumn()
  _id!: string;
  @Column()
  email!: string;
  @Column()
  detail?: string;
}
