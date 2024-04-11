import bodyParser from 'body-parser';
import { Express } from 'express'
import { contentType, cors } from 'main/middlewares'
const express = require('express');

export default (app: Express): void => {
  app.use(bodyParser.json()); 
  app.use(cors)
  app.use(contentType)
  app.use(express.json());
  // app.use(contentTypeMiddleware);
}
