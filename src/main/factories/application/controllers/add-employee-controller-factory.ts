import { Controller } from "application/contracts"
import { makeDbAddEmployee } from "../../domain/usecases"
import { makePgTransactionController } from "../decorators"
import { makeAddEmployeeValidation } from "./add-employee-controller-validation-factory"
import { AddEmployeeController } from "../../../../application/controllers"

export const makeAddEmployeeController = (): Controller => {
  const controller = new AddEmployeeController(
    makeDbAddEmployee(),
    makeAddEmployeeValidation()
  )
  return makePgTransactionController(controller)
}