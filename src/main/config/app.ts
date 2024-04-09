// import setupMiddlewares from '@/main/config/middlewares'
// import setupSwagger from '@/main/config/swagger'
import express from 'express'
import { setupRoutes } from './routes'

const app = express()
// setupSwagger(app)
// setupMiddlewares(app)
setupRoutes(app)
export { app }
