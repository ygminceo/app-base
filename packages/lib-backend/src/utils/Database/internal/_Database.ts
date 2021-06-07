import { Account } from '@lib/backend/account/databases/account.entity';
import { Otp } from '@lib/backend/authentication/databases/otp.entity';
import { BankAccount } from '@lib/backend/payment/database/bankAccount.entity';
import {
  _CollectionClass,
  _DatabaseClass,
} from '@lib/backend/utils/Database/internal/_Database.model';
import { DuplicateError } from '@lib/common/core/errors';
import { config } from '@lib/common/core/utils/Config/Config';
import { ObjectId } from 'mongodb';
import { Connection, ConnectionManager, createConnection, getConnectionManager } from 'typeorm';

const CONNECTION_NAME = 'default';

const DATABASE_TYPE = config.get<string>('DATABASE_TYPE');
const DATABASE_URL = config.get<string>('DATABASE_URL');
const DATABASE_USERNAME = config.get<string>('DATABASE_USERNAME');
const DATABASE_PASSWORD = config.get<string>('DATABASE_PASSWORD');
const DATABASE_NAME = config.get<string>('DATABASE_NAME');

export class _Database implements _DatabaseClass {
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
      type: DATABASE_TYPE as any,
      url: DATABASE_URL,
      username: DATABASE_USERNAME,
      password: DATABASE_PASSWORD,
      database: DATABASE_NAME,
      synchronize: false,
      logging: false,
      entities: [Account, BankAccount, Otp],
    });
  }

  public getCollection(name: string): _CollectionClass {
    Promise;
    const self = this;
    class Collection implements _CollectionClass {
      get = async <P, T>(data: P, select?: (keyof T)[]) => {
        const connection = await self._getConnection();
        const repository = connection.getRepository<T>(name);
        const _id = (data as any)._id;
        const result = await repository.findOne(
          {
            ...data,
            _id: _id ? new ObjectId(_id) : undefined,
          },
          { select },
        );
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
