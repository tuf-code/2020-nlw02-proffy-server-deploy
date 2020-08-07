import express from 'express';
import routes from './routes';
import cors from 'cors';

// será a aplicação, tudo vai partir daqui
const app = express();

// por padrão o express não entende json, dessa forma ele passa a entender
app.use(express.json());
app.use(cors());
app.use(routes);

// ouvir requisições HTTP através de uma porta
app.listen(process.env.PORT || 1337);

// GET: buscar ou listar informações
// POST: criar alguma nova informação
// PUT: alterar uma informação existente
// DELETE: excluir uma informação existente

// Corpo (Request Body): Dados para criação ou atualização de um registro
// Route Params: Identificar qual recurso eu quero atualizar ou deletar /users/:id
// Query Params: Paginação, filtros, ordenação