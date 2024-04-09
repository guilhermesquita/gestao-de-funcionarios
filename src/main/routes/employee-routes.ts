import { Router } from "express";
import { adaptExpressRoute as adapt } from '../adapters'
import { makeAddEmployeeController } from "../factories/application/controllers";

export default (router: Router): void => {
    router.post('/employees', adapt(makeAddEmployeeController()));
}