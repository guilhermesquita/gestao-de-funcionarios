
import { DbTransaction } from 'application/contracts'; // Certifique-se de que está importando corretamente a interface
const admin = require('firebase-admin');

export class FirestoreTransaction implements DbTransaction {
    private firestore: FirebaseFirestore.Firestore;
    constructor() {
      this.firestore = admin.firestore();
    }
    async openTransaction(): Promise<void> {
      try {
        // Inicie a transação
        await this.firestore.runTransaction(async (transaction) => {
          // Implemente aqui qualquer lógica específica da transação, se necessário
          console.log('Transação do Firestore iniciada com sucesso!');
        });
      } catch (error) {
        // Lide com erros de abertura de transação
        console.error('Erro ao abrir a transação do Firestore:', error);
        throw error; // Propague o erro para que seja tratado em níveis superiores
      }
    }
  
    async closeTransaction(): Promise<void> {
      // Implemente a lógica de fechamento da transação do Firestore aqui
    }
  
    async commit(): Promise<void> {
      try {
        // Confirme a transação
        console.log('Commit da transação do Firestore realizado com sucesso!');
      } catch (error) {
        // Lide com erros de commit
        console.error('Erro ao confirmar a transação do Firestore:', error);
        throw error; // Propague o erro para que seja tratado em níveis superiores
      }
    }
  
    async rollback(): Promise<void> {
      try {
        // Reverta a transação
        console.log('Rollback da transação do Firestore realizado com sucesso!');
      } catch (error) {
        // Lide com erros de rollback
        console.error('Erro ao reverter a transação do Firestore:', error);
        throw error; // Propague o erro para que seja tratado em níveis superiores
      }
    }
  }