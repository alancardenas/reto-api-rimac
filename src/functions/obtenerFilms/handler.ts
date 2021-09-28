import type { APIGatewayProxyHandler } from 'aws-sdk';
import { formatJSONResponse } from '@libs/apiGateway';
import { mapper } from '@libs/mapper';
import axios from 'axios';

export const obtenerFilms: APIGatewayProxyHandler = async (event) => {
  const respuesta = await axios.get('https://swapi.py4e.com/api/films/');
  const dataSwapi = respuesta.data.results;

  const traducedAttributes = {
      title: 'titulo',
      episode_id: 'id',
      opening_crawl: 'resumen',
      director: 'director',
      producer: 'productor',
      release_date: 'fecha_lanzamiento'
  }

  const resultado = mapper(dataSwapi,traducedAttributes);

  return formatJSONResponse({
    message: resultado
  });
}
