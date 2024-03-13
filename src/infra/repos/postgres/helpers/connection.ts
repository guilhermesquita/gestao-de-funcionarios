import {
  ConnectionNotFoundError,
  TransactionNotFoundError
} from '@/infra/repos/postgres/helpers'
import { DbTransaction } from '@/application/contracts'
import { QueryRunner, DataSource } from 'typeorm'
import { env } from '@/main/config/env'

export class PgConnection implements DbTransaction {
  private static instance?: PgConnection
  private query?: QueryRunner
  private dataSource: DataSource

  private constructor() {}

  static getInstance(): PgConnection {
    if (PgConnection.instance === undefined)
      PgConnection.instance = new PgConnection()
    return PgConnection.instance
  }

  connect(): DataSource {
    if (this.dataSource === undefined) {
      this.dataSource = new DataSource({
        type: 'postgres',
        host: env.postgres_host,
        port: +env.postgres_port,
        username: env.postgres_username,
        password: env.postgres_password,
        database: env.postgres_database,
        entities: ['src/**/*.entity.ts', 'dist/**/*.entity.js']
      })
    }
    return this.dataSource
  }

  async disconnect(): Promise<void> {
    if (this.dataSource === undefined) throw new ConnectionNotFoundError()
    this.query = undefined
  }

  async openTransaction(): Promise<void> {
    if (this.dataSource === undefined) throw new ConnectionNotFoundError()
    this.query = this.dataSource.createQueryRunner()
    await this.query.startTransaction()
  }

  async closeTransaction(): Promise<void> {
    if (this.query === undefined) throw new TransactionNotFoundError()
    await this.query.release()
  }

  async commit(): Promise<void> {
    if (this.query === undefined) throw new TransactionNotFoundError()
    await this.query.commitTransaction()
  }

  async rollback(): Promise<void> {
    if (this.query === undefined) throw new TransactionNotFoundError()
    await this.query.rollbackTransaction()
  }
}
