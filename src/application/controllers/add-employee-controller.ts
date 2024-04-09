import { Controller, HttpResponse, Validation } from "application/contracts"
import { badRequest, created, serverError } from "../../application/helpers"
import { AddEmployee } from "domain/contracts/repos"

  export class AddEmployeeController implements Controller {
    constructor(
      private readonly addEmployee: AddEmployee,
      private readonly validation: Validation
    ) {}
  
    async handle(request: AddEmployeeController.Request): Promise<HttpResponse> {
      try {
        const error = this.validation.validate(request)
        if (error) {
          return badRequest(error)
        }
        const {
          employee_name,
          employee_role,
          employee_address,
          employee_sector,
          employee_number,
          employee_sex,
          dt_birth,      
          admission_date,           
          profile_pic,
           salary
        } = request
        const result = await this.addEmployee.add({
            employee_name: employee_name,
            employee_role: employee_role,
            employee_address: employee_address,
            employee_sector: employee_sector,
            employee_number: employee_number,
            employee_sex: employee_sex,
            dt_birth: dt_birth,
            admission_date: admission_date,            
            profile_pic: profile_pic,
            salary: salary
        })
        return created(result)
      } catch (error: any) {
        return serverError(error)
      }
    }
  }
  
  export namespace AddEmployeeController {
    export type Request = {
      employee_name: string
      employee_role: string
      employee_address: string
      employee_sector: string
      employee_number: number
      employee_sex: string
      dt_birth: Date
      admission_date: Date,
      profile_pic: string
      salary: number
    }
  }