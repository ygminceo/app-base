import { ObjectId } from 'mongodb';
import { Connection, ConnectionManager, createConnection, getConnectionManager } from 'typeorm';
import { DuplicateError } from '@lib/common/core/errors';
import { config } from '@lib/common/core/utils/Config/Config';
import { Otp } from '@lib/backend/authentication/databases/otp.entity';
import { Bank } from '@lib/backend/billing/database/bank.entity';
import {
  _CollectionModel,
  _DatabaseModel,
} from '@lib/backend/core/utils/Database/internal/_Database.model';
import { User } from '@lib/backend/user/databases/user.entity';

const CONNECTION_NAME = 'default';

const SERVER_DATABASE_TYPE = config.get<string>('SERVER_DATABASE_TYPE');
const SERVER_DATABASE_URL = config.get<string>('SERVER_DATABASE_URL');
const SERVER_DATABASE_USERNAME = config.get<string>('SERVER_DATABASE_USERNAME');
const SERVER_DATABASE_PASSWORD = config.get<string>('SERVER_DATABASE_PASSWORD');
const SERVER_DATABASE_NAME = config.get<string>('SERVER_DATABASE_NAME');

export class _Database implements _DatabaseModel {
  private _connectionManager: ConnectionManager;

  constructor() {
    this._connectionManager = getConnectionManager();
  }

  private async _getConnection(): Promise<Connection> {
    let connection: Connection;
    if (this._connectionManager.has(CONNECTION_NAME)) {
      connection = await this._connectionManager.get(CONNECTION_NAME);
      if (!connection.isConnected) {
        return await connection.connect();
      }
      return connection;
    }
    return await createConnection({
      type: SERVER_DATABASE_TYPE as any,
      url: SERVER_DATABASE_URL,
      username: SERVER_DATABASE_USERNAME,
      password: SERVER_DATABASE_PASSWORD,
      database: SERVER_DATABASE_NAME,
      synchronize: false,
      logging: false,
      entities: [User, Bank, Otp],
    });
  }

  public getCollection(name: string): _CollectionModel {
    Promise;
    const self = this;
    class Collection implements _CollectionModel {
      get = async <P, T>(data: P, select?: (keyof T)[]) => {
        const connection = await self._getConnection();
        const repository = connection.getRepository<T>(name);
        const _id = (data as any)._id;
        if (_id) {
          (data as any)._id = new ObjectId(_id);
        }
        const result = await repository.findOne(data, { select });
        return result as T;
      };

      save = async <P, T>(data: P) => {
        const connection = await self._getConnection();
        const repository = connection.getRepository<T>(name);
        const id = (data as any)._id;
        const save = id ? repository.update(id, data) : repository.save<T>(repository.create(data));
        const result = await save.catch((e) => {
          switch (e.code) {
            case 11000:
              throw new DuplicateError();
            default:
              throw Error(e);
          }
        });
        return result as any;
      };

      delete = async <P, T>(data: P) => {
        const connection = await self._getConnection();
        const repository = connection.getRepository<T>(name);
        await repository.delete(data);
      };
    }
    return new Collection();
  }
}
