import { CollectionClass } from '@lib/backend/utils/Database/Database.model';
import { SignInRequest, SignInResponse } from '@lib/common/authentication/models';

export type signInFunciton = (props: {
  data: SignInRequest;
  accountCollection: CollectionClass;
  otpCollection: CollectionClass;
}) => Promise<SignInResponse>;
