import type { APIGatewayProxyHandler } from 'aws-lambda';
import { formatJSONResponse } from '@libs/apiGateway';

import { DynamoDB } from "aws-sdk"
import * as uuid from 'uuid';

const dbConnection= new DynamoDB.DocumentClient();
type Film = {
  titulo: String,
  resumen: String,
  director: String,
  productor: String,
  fecha_lanzamiento: String,
}

export const agregarFilm: APIGatewayProxyHandler = async (event) => {
const body = JSON.parse(event.body) as Film;
  
  const film = {
      id: uuid.v1(),
      titulo: body.titulo,
      resumen: body.resumen,
      director: body.director,
      productor: body.productor,
      fecha_lanzamiento: body.fecha_lanzamiento
  }
  const parametros = {
    TableName: 'FilmTable',
    Item: film
  }
  try{
    await dbConnection.put(parametros).promise();
    //await dbConnection.scan(parametros).promise();

    return formatJSONResponse({
      message: 'se agrego correctamente',
      pelicula: film
    });
  }
  catch(ex){
    return formatJSONResponse({
      error: ex
    });
  }
}
