import { Validation } from 'application/contracts'
import { RequiredFieldYupValidation } from '../../../../application/validation'
import * as yup from 'yup'

export const makeAddEmployeeValidation = (): Validation => {
  const schema = yup.object().shape({
    
  })
  return new RequiredFieldYupValidation(schema)
}