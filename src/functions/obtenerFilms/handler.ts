import type { APIGatewayProxyHandler } from 'aws-sdk';
import { formatJSONResponse } from '@libs/apiGateway';

export const obtenerFilms: APIGatewayProxyHandler = async (event) => {
  return formatJSONResponse({
    message: `obtenerFilms`,
    event,
  });
}
