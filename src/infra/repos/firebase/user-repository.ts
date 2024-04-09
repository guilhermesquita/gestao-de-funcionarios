import {LoadUserAll} from '../../../domain/contracts/repos'
import { PgConnection } from './helpers/connection'
import {PgUser} from './entities/'
import { User } from '../../../domain/entities/user'

export class PgUserRepository implements LoadUserAll{
    async loadAll(): Promise<LoadUserAll.Result>{
        const pgUserRepo = PgConnection.getInstance()
        .connect()
        .getRepository(PgUser)

        const userPg = await pgUserRepo.find()
        return userPg as unknown as User[]
    };
}