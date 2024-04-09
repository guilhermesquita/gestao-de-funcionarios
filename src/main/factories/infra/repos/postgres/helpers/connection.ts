import { db } from '../../../../../../infra/repos/firebase/helpers'

export const makePgConnection = () => {
  return db
}
