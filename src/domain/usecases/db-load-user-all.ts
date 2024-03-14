import { LoadUserAll } from "../contracts/repos/load-user-all";

export class DbLoadUserAll implements LoadUserAll {
    constructor(
        private readonly loadUserAll: LoadUserAll
    ){}

   async loadAll(): Promise<LoadUserAll.Result>{
    return await this.loadUserAll.loadAll()
   };
}