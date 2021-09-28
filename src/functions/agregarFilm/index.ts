import { handlerPath } from '@libs/handlerResolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.agregarFilm`,
  events: [
    {
      http: {
        method: 'post',
        path: 'agregarFilm',
        cors: true
      }
    }
  ]
}
