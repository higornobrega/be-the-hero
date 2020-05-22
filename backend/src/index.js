const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes')

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no bask-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetro
  * 
  * Query Params: Parâmetros nomeados na rota após "?" (Filtros, paginação)
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar resursos
  */

  /**
   * Bancos de Dados
   * 
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc
   */

   /**
    * Modos de Codificação dos BDs
    * 
    * Driver: SELECT * FROM users (linguagem do BD)
    * Query Builder: table('users').select('*').where() (Linguagem JavaScript)
    */

    /*
    app.post('/users', (request, response) => {
        //return response.send('Hello World');
        const body = request.body;
        console.log(body)
        return response.json({
            evento: 'Semana OmniStack 11.0',
            aluno: 'Higor Nóbrega'
        });
    });
*/

app.listen(3333);