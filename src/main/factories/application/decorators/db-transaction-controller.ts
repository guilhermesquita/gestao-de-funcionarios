import { Controller } from 'application/contracts';
import { FirestoreTransactionController } from '../../../../application/decorators';
// import { FirestoreTransaction } from '../../../../infra/repos/firebase/helpers';
const admin = require('firebase-admin');

export const makeFirestoreTransactionController = (
  controller: Controller
): FirestoreTransactionController => {
  // const firestoreTransaction = new FirestoreTransaction(); // Sem parâmetros
  return new FirestoreTransactionController(controller, admin.firestore());
};