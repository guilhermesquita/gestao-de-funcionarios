import { Router } from "express";
import { adaptExpressRoute as adapt } from '../adapters'
import { makeLoadUserAllController } from "../factories/application/controllers/load-user-all-controller-factory";

export default (router: Router): void => {
    router.get('/users'), adapt(makeLoadUserAllController())
}