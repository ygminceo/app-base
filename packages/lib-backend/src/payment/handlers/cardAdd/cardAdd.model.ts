import { CardAddRequestModel, CardAddResponseModel } from '@lib/common/payment/models';

export type CardAddHandlerModel = (data: CardAddRequestModel) => Promise<CardAddResponseModel>;
