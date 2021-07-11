import { v4 } from 'uuid';

export class GUID {
  static v4() {
    return v4();
  }

  static random(length: number) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let key = '';
    for (let i = 0; i < length; i++) {
      key += chars.substr(Math.floor(Math.random() * chars.length + 1), 1);
    }
    return key;
  }
}
