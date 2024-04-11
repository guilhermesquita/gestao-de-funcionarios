import { FirestoreTransaction } from "../../infra/repos/firebase/helpers/transaction";
import { Controller, HttpResponse } from "application/contracts";

export class FirestoreTransactionController implements Controller {
  constructor(
    private readonly decoratee: Controller,
    private readonly db: FirestoreTransaction
  ) {}

  async handle(httpRequest: any): Promise<HttpResponse> {
    await this.db.openTransaction();// Verifique se a propriedade 'db' está definida corretamente
    try {
      const httpResponse = await this.decoratee.handle(httpRequest);
      await this.db.commit();
      return httpResponse;
    } catch (error) {
      await this.db.rollback();
      throw error;
    } finally {
      await this.db.closeTransaction();
    }
  }
}