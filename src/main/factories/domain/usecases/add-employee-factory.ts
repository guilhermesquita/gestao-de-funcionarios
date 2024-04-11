import { FbEmployeeRepository } from "../../../../infra/repos/firebase"
import { DbAddEmployee } from "../../../../domain/usecases/"
import { AddEmployee } from "domain/contracts/repos"

export const makeDbAddEmployee = (): AddEmployee => {
  const fbEmployeeRepository = new FbEmployeeRepository()
  return new DbAddEmployee(fbEmployeeRepository)
}