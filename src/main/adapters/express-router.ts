import { Controller } from '@/application/contracts'
import { RequestHandler } from 'express'

type Adapter = (controller: Controller) => RequestHandler

export const adaptExpressRoute: Adapter = controller => async (req, res) => {
  const httpResponse = await controller.handle({
    ...req.body,
    ...req.params,
    ...req.query,
    ...req.locals
  })
  console.log(req.body)
  const json = [200, 201, 204].includes(httpResponse.statusCode)
    ? httpResponse.body
    : { error: httpResponse }
  res.status(httpResponse.statusCode).json(json)
}