import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  Index,
  ObjectIdColumn,
  PrimaryColumn,
} from 'typeorm';
import { OTP_EXPIRATION_SECONDS } from '@lib/common/authentication/constants';
import { OtpModel } from '@lib/common/authentication/models';

@Entity()
export class Otp implements OtpModel {
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
