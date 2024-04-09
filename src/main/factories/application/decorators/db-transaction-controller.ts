import { Controller } from 'application/contracts'
import { makePgConnection } from '../../infra/repos/postgres/helpers/connection'
import { DbTransactionController } from '../../../../application/decorators'

export const makePgTransactionController = (
  controller: Controller
): DbTransactionController => {
  return new DbTransactionController(controller, makePgConnection())
}
