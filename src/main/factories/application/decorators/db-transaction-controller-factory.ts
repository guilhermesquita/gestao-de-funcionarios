import { Controller } from 'application/contracts';
import { FirestoreTransactionController } from '../../../../application/decorators';
import { FirestoreTransaction } from '../../../../infra/repos/firebase/helpers/transaction';

export const makeFirestoreTransactionController = (
  controller: Controller
): FirestoreTransactionController => {
  const firestoreTransaction = new FirestoreTransaction(); // Sem parâmetros
  return new FirestoreTransactionController(controller, firestoreTransaction);
};