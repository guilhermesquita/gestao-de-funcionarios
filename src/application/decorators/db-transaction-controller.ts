import { FirestoreTransaction } from "../../infra/repos/firebase/helpers/transaction";
import { Controller, HttpResponse } from "application/contracts";
const admin = require('firebase-admin');

export class FirestoreTransactionController implements Controller {
  constructor(
    private readonly decoratee: Controller,
    private readonly db: FirestoreTransaction
  ) {}

  async handle(httpRequest: any): Promise<HttpResponse> {
    const transaction = new FirestoreTransaction();
    await transaction.openTransaction();// Verifique se a propriedade 'db' está definida corretamente
    try {
      const httpResponse = await this.decoratee.handle(httpRequest);
      await transaction.commit();
      return httpResponse;
    } catch (error) {
      await transaction.rollback();
      throw error;
    } finally {
      await transaction.closeTransaction();
    }
  }
}