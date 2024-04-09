import { AddEmployee } from "domain/contracts/repos";
import { db } from "./helpers"

export class FbEmployeeRepository implements AddEmployee {
    async add(employee: AddEmployee.Params): Promise<AddEmployee.Result> {
        try {
            const employeeCollection = db.collection('employee');
            const newEmployeeRef = await employeeCollection.add(employee);

            return {
                employee_id: newEmployeeRef.id,
                message: 'Criado com sucesso',
                statusCode: 201
              }
        } catch (error) {
            console.error('Erro ao adicionar funcionário:', error);
            throw error;
        }
    };  
}