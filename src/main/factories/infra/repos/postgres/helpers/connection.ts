import * as admin from 'firebase-admin';

export const makeFirestoreConnection = () => {
  // Retorne uma instância do Firestore
  return admin.firestore();
};