import { FbEmployeeRepository } from "../../../../infra/repos/firebase"
import { DbAddEmployee } from "../../../../domain/usecases/"
import { AddEmployee } from "domain/contracts/repos"

export const makeDbAddEmployee = (): AddEmployee => {
  const pgEmployeeRepository = new FbEmployeeRepository()
  return new DbAddEmployee(pgEmployeeRepository)
}