export interface AddEmployee {
    add: (employee: AddEmployee.Params) => Promise<AddEmployee.Result>
}

export namespace AddEmployee {
    export type Params = {
        employee_name: string
        employee_sex: string
        employee_number: number
        employee_address: string        
        employee_role: string
        employee_sector: string
        profile_pic: string
        dt_birth: Date
        admission_date: Date
        salary: number        
    }

    export type Result = {
        employee_id: number,
        statusCode: number,
        message: string
    }
}