import { Controller, HttpResponse } from '../contracts/'
import { LoadUserAll } from "../../domain/contracts/repos"
import {ok, serverError} from '../helpers'

export class LoadUserAllController implements Controller{
    constructor(
        private readonly loadUserAll: LoadUserAll 
    ){}

    async handle(): Promise<HttpResponse>{
        try {
            return ok(await this.loadUserAll.loadAll())
        } catch (error: any) {
            return serverError(error)
        }
    };
}