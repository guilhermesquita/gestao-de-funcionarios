import { Controller } from '../../../../application/contracts'
import { LoadUserAllController } from '../../../../application/controllers'
import { makeDbLoadUserAll } from '../../../../main/factories/domain/usecases'
import { makePgTransactionController } from '../../../../main/factories/application/decorators'

export const makeLoadUserAllController = (): Controller => {
  const controller = new LoadUserAllController(
    makeDbLoadUserAll(),
  )
  return makePgTransactionController(controller)
}