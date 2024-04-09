import { AddEmployee } from "domain/contracts/repos";

export class DbAddEmployee implements AddEmployee {
    constructor(
        private readonly addEmployeeRepository: AddEmployee
    ){}

   async add(employee: AddEmployee.Params): Promise<AddEmployee.Result>{

    const result = await this.addEmployeeRepository.add({
        employee_name: employee.employee_name,
        employee_sex: employee.employee_sex,
        employee_number: employee.employee_number,
        employee_address: employee.employee_address,        
        employee_role: employee.employee_role,
        employee_sector: employee.employee_sector,
        profile_pic: employee.profile_pic,
        dt_birth: employee.dt_birth,
        admission_date: employee.admission_date,
        salary: employee.salary
    })

    return result;
   };
}