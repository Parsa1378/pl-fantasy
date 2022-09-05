require("dotenv").config();
import express, { Express, Request, Response } from 'express';
const port:Number = parseInt(<string>process.env.PORT);
const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server in running');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});