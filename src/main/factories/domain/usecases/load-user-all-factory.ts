import { LoadUserAll } from '../../../../domain/contracts/repos'
import { DbLoadUserAll } from '../../../../domain/usecases'
import { PgUserRepository } from '../../../../infra/repos/postgres'

export const makeDbLoadUserAll = (): LoadUserAll => {
  const pgUserRepository = new PgUserRepository()
  return new DbLoadUserAll(pgUserRepository)
}