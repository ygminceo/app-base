import { randomInt } from 'crypto';

export class Crypto {
  static async randomInt(n: number): Promise<string> {
    return randomInt(Math.pow(10, n - 1), Math.pow(10, n) - 1).toString();
  }
}
