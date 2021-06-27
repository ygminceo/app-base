import { {{NAME}}RequestModel, {{NAME}}ResponseModel } from '@lib/common/{{SERVICE}}(camelCase)/models';
import { CollectionModel } from '@lib/backend/core/utils/Database/Database.model';

export type {{NAME}}HandlerModel = (params: {
  data: {{NAME}}RequestModel;
}) => Promise<{{NAME}}ResponseModel>;
