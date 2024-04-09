import express, { Request, Response } from "express";
import { db } from "../infra/repos/firebase/helpers";
  
  // Express
  const app = express();
  
  app.use(express.json());
  
  app.listen(Number(process.env.PORT || 3005), () => {
      console.log(`Servidor rodando na porta ${process.env.PORT}`);
  });

app.get('/Ping', (req: Request, res: Response) => {
  res.send('pong')
})

app.get('/test', async (req: Request, res: Response) => {
  try {
    // Aguarde a resolução da Promise
    const snapshot = await db.collection('employee').get();

    // Mapeie os dados do snapshot para um array
    const data = snapshot.docs.map(doc => doc.data());

    // Envie os dados como resposta
    res.json(data)
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    res.status(500).send('Erro ao buscar dados');
  }
});