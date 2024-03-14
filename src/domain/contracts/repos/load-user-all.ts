import { User } from "../../entities/user"

export interface LoadUserAll {
    loadAll: () => Promise <LoadUserAll.Result>
}

export namespace LoadUserAll{
    export type Result = User[] | undefined
}