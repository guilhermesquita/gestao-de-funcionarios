import express, { Request, Response } from "express";
import { db } from "../infra/repos/firebase/helpers";
import { env } from "process";
import { API } from "../utils/constants";
import { app } from "./config/app";

// Express
const apps = app;

apps.listen(env.port, () => {
  console.log(`Server running at http://localhost:${env.port}${API}`)
  // console.log(`Swagger at http://localhost:${env.port}${API}${SWAGGER}`)
})

apps.get('/Ping', (_req: Request, res: Response) => {
  res.send('pong')
})

// apps.post('/Ping', async (req: Request, _res: Response) => {
//   const teste = await req.body
//   // console.log(teste)
// })

apps.get('/test', async (_req: Request, res: Response) => {
  try {
    // Aguarde a resolução da Promise
    const employee = await db.collection('employee').get();

    // Mapeie os dados do employee para um array
    const data = employee.docs.map(doc => doc.data());

    // Envie os dados como resposta
    res.json(data)
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    res.status(500).send('Erro ao buscar dados');
  }
});