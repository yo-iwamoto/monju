import { NODE_ENV } from '@/config/const';
import { PrismaClient } from '@prisma/client';

const instanciatePrismaClient = () =>
  new PrismaClient({
    log: ['info', 'error', 'query', 'warn'],
  });

/**
 * next dev で Prisma のデータベースコネクションが際限なく増えてしまう
 * 問題を解決するためのシングルトン
 *
 * development 環境でのみ使用する
 */
class PrismaClientSingleton {
  private static _instance: PrismaClient;

  private constructor() {
    // pass
  }

  static getInstance = () => {
    if (!PrismaClientSingleton._instance) {
      PrismaClientSingleton._instance = instanciatePrismaClient();
    }

    return PrismaClientSingleton._instance;
  };
}

// development のときシングルトンを使用する
export const getPrisma = () =>
  NODE_ENV === 'development' ? PrismaClientSingleton.getInstance() : instanciatePrismaClient();
