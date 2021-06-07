import { OTP_EXPIRATION_SECONDS } from '@lib/common/authentication/constants';
import { OtpClass } from '@lib/common/authentication/models';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  Index,
  ObjectIdColumn,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class Otp implements OtpClass {
  @ObjectIdColumn()
  _id!: string;
  @PrimaryColumn()
  username!: string;
  @Column()
  otp!: string;
  @Column()
  @Index({ expireAfterSeconds: OTP_EXPIRATION_SECONDS })
  createdAt!: Date;

  @BeforeInsert()
  @BeforeUpdate()
  beforeInsertActions() {
    this.createdAt = new Date();
  }
}
