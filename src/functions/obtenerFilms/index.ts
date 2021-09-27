import { handlerPath } from '@libs/handlerResolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.obtenerFilms`,
  events: [
    {
      http: {
        method: 'get',
        path: 'obtenerFilms',
        cors: true
      }
    }
  ]
}
